import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';
import { TituloService } from '../../services/titulo.service';
import { MedicoService } from '../../services/medico.service';
import { Observable, Subject, map } from 'rxjs';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss'],
})
export class TitulosComponent {
  today=new Date();
  medicos!:Observable<any>;
  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private notificacion: ToastrService,
    private readonly authService: AuthService,
    private readonly tituloService: TituloService,
    private readonly medicoService:MedicoService
  ) {
    authService.userInformation().subscribe((data) => {
      if (data.user.rol_id !== 1) {
        this.router.navigate(['home']);
      }
      this.medicoService.obtenerTodos().subscribe((data)=>{
        console.log(data)
      })
      this.medicos=this.medicoService.obtenerTodos().pipe(map(data=>data.medicos));
    });
  }
  ngOnInit(): void {
    this.buildForm();
  }
  FormTitulo!: FormGroup;
  buildForm() {
    this.FormTitulo = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      medico_id: ['', [Validators.required]],
    });
  }

  onSubmitTitulo() {
    if (this.FormTitulo.invalid) {
      this.notificacion.warning('Formulario invalido', 'Proceso erroneo');
      // Realiza acciones si el formulario es inválido
      return;
    } else {
      this.tituloService.create(this.FormTitulo.value).subscribe((data) => {
        this.notificacion.success(
          'Titulo creado correctamente',
          'Proceso exitoso'
        );
        this.FormTitulo.reset();
    })
  }
  }
  getFormattedDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }
}
