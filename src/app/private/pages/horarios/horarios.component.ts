import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  constructor(private readonly router: Router,
    private formBuilder: FormBuilder,private notificacion:ToastrService,) {}
    ngOnInit(): void {
      this.buildForm();
    }
    FormLogin!: FormGroup;
buildForm() {
  this.FormLogin = this.formBuilder.group({
    medicos: ['', [Validators.required]],
    dias: ['', [Validators.required]],
    horaI: ['', [Validators.required,this.validateTime]],
    horaF: ['', [Validators.required,this.validateTime]],
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

      if ((period.toLowerCase() === 'pm' && numericHours < 8) || (period.toLowerCase() === 'am' && numericHours > 6)) {
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
    return;
  }

  // Realiza acciones si todas las validaciones son exitosas

}
}
