import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';
import { EspecialidadService } from '../../services/especialidad.service';
import { EventEmitterService } from '../../services/eventEmitter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss'],
})
export class EspecialidadComponent {
  especialidades:any;
  FormEspecialidad!:FormGroup
  especialidad_id:any=null;
  constructor(
    private readonly authService: AuthService,
    private router: Router,
    private notificacion: ToastrService,
    private readonly especialidadService: EspecialidadService,
    private readonly eventEmitterService: EventEmitterService,
    private readonly formBuilder:FormBuilder
  ) {
    if(localStorage.getItem('rol')!=='Admin'){
      this.router.navigate(['/home'])
    }
    this.buildForm();
    this.getEspecialidades()
    this.eventEmitterService.getEvent().subscribe(data=>{
      if(data.event=='DELETE_ESPECIALIDAD'){
        this.getEspecialidades();
      }
      if(data.event=='EDIT_ESPECIALIDAD'){
        this.findEspecialidadFillForm(data.id)
      }
    })
  }
  onSubmit(value:any){
    if (this.FormEspecialidad.invalid) {
      this.notificacion.warning('LLenar los campos correctamente','Formulario invalido')
    }else{
      if(this.especialidad_id!=null){
        return this.editEspecialidad(value);
      }
      this.especialidadService.create(value).subscribe((data)=>{
        this.notificacion.success('Especialidad creada','Proceso exitoso')
        this.getEspecialidades();
        this.FormEspecialidad.reset();
      })
    }
  }
  buildForm() {
    this.FormEspecialidad = this.formBuilder.group({
      nombre: ['', [Validators.required]],
    });
  }
  getEspecialidades() {
    this.especialidadService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.especialidades = data.especialidades;
    });
  }
  editEspecialidad(body:any){
    this.especialidadService.update(body,this.especialidad_id).subscribe(data=>{
      this.notificacion.success('Especialidad actualizada','Proceso exitoso');
      this.getEspecialidades();
      this.FormEspecialidad.reset();
      this.especialidad_id=null;
    })
  }
  findEspecialidadFillForm(id: any) {
    this.especialidadService.obtenerUno(id).subscribe((data) => {
      this.especialidad_id=id;
       this.FormEspecialidad.setValue({
        nombre:data.especialidad.nombre
      });
    });
}
}
