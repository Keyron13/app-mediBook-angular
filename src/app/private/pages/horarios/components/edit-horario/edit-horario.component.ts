import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { HorarioService } from 'src/app/private/services/horario.service';
import { MedicoService } from 'src/app/private/services/medico.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-edit-horario',
  templateUrl: './edit-horario.component.html',
  styleUrls: ['./edit-horario.component.scss'],
})
export class EditHorarioComponent {
  medicos!: Observable<any>;
  horarios!: any;
  user: any;
  horario_id:any
  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private notificacion: ToastrService,
    private horarioService: HorarioService,
    private medicoService: MedicoService,
    private eventEmitter: EventEmitterService,
    private authService: AuthService,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private id: any
  ) {
    this.horario_id = id;
    console.log(this.horario_id)
    this.findHorarioFillForm(this.horario_id);
    this.authService.userInformation().subscribe((data) => {
      this.user = data.user;
      if (data.user.rol_id == 2) {
        this.medicoService
          .allMedico()
          .pipe(map((data: any) => data.Informacion.horario))
          .subscribe((data) => {
            this.horarios = data;
          });
      } else {
        this.medicos = this.medicoService
          .obtenerTodos()
          .pipe(map((res) => res.medicos));
      }
    });
    this.buildForm();
  }

  FormLogin!: FormGroup;
  buildForm() {
    this.FormLogin = this.formBuilder.group({
      medicos: ['', [Validators.required]],
      dias: ['', [Validators.required]],
      horaI: ['', [Validators.required]],
      horaF: ['', [Validators.required]],
    });
  }
  validateTime(control: any) {
    const value = control.value;
    if (value) {
      const timeRegex = /^(0?[8-9]|1[0-7]):[0-5]\d [APap][Mm]$/;
      if (!timeRegex.test(value)) {
        return { invalidTime: true };
      }

      const [hours, minutes, period] = value.split(/:| /);
      const numericHours = parseInt(hours, 10);

      if (
        (period.toLowerCase() === 'pm' && numericHours < 8) ||
        (period.toLowerCase() === 'am' && numericHours > 6)
      ) {
        return { invalidTime: true };
      }
    }
    return null;
  }
  Horario() {
    if (this.FormLogin.invalid) {
      // Realiza acciones si el formulario es inválido
      return;
    }

    const horaInicio = this.FormLogin.get('horaI')?.value;
    const horaSalida = this.FormLogin.get('HoraF')?.value;

    if (horaInicio > horaSalida) {
      // Realiza acciones si la hora de inicio es mayor que la hora de salida
      this.notificacion.warning(
        'La hora de inicio es mayor que la hora de salida',
        'Advertencia!'
      );
      return;
    }
    if (this.horario_id != null) {
      const body = {
        hora_inicio: this.FormLogin.get('horaI')?.value,
        hora_fin: this.FormLogin.get('horaF')?.value,
      };
      return this.editHorario(body);
    }
    const body = {
      dia: this.FormLogin.get('dias')?.value,
      hora_inicio: this.FormLogin.get('horaI')?.value,
      hora_fin: this.FormLogin.get('horaF')?.value,
      medico_id: this.FormLogin.get('medicos')?.value,
    };
    console.log(body);
    this.horarioService.create(body).subscribe((data) => {
      this.notificacion.success('Horario asignado', 'Proceso exitoso');
      /* this.getHorarios(); */
      this.eventEmitter.setEvent({
        event: 'CREAR_HORARIO',
      }); /* se crea para actualizar la tabla junto con el componente tabla */
      this.matDialog.closeAll(); /* se agrega para cerrar el formulario */
      this.FormLogin.reset();
    });

    // Realiza acciones si todas las validaciones son exitosas
  }
  /* getHorarios() {
    this.horarioService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.horarios = data.horarios;
    });
  } */
  editHorario(body: any) {
    this.horarioService.update(body, this.horario_id).subscribe((data) => {
      this.notificacion.success('Horario actualizado', 'Proceso exitoso');
      /* this.getHorarios(); */
      this.eventEmitter.setEvent({
        event: 'CREAR_HORARIO',
      }); /* se crea para actualizar la tabla junto con el componente tabla */
      this.matDialog.closeAll(); /* se agrega para cerrar el formulario */
      this.FormLogin.reset();
      this.FormLogin.get('dias')?.enable();
      this.FormLogin.get('medicos')?.enable();

      this.horario_id = null;
    });
  }
  findHorarioFillForm(id: any) {
    this.horarioService.obtenerUno(id).subscribe((data) => {
      console.log(data.Horario);
      this.FormLogin.setValue({
        medicos: data.Horario.medico_id,
        dias: data.Horario.dia,
        horaI: data.Horario.hora_inicio,
        horaF: data.Horario.hora_fin,
      });

      this.FormLogin.get('dias')?.disable();
      this.FormLogin.get('medicos')?.disable();
    });
  }
}