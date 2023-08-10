import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent {
  constructor(private readonly router: Router,
    private formBuilder: FormBuilder,private notificacion:ToastrService,) {}
    ngOnInit(): void {
      this.buildForm();
    }
    FormTitulo!: FormGroup;
buildForm() {
  this.FormTitulo = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    medicos: ['', [Validators.required]],

  });
}

Horario() {
  if (this.FormTitulo.invalid) {
    // Realiza acciones si el formulario es inválido
    return;
  }else{

  }



  // Realiza acciones si todas las validaciones son exitosas

}
}
