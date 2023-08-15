import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadService } from 'src/app/private/services/especialidad.service';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-crear-especialidad',
  templateUrl: './crear-especialidad.component.html',
  styleUrls: ['./crear-especialidad.component.scss']
})
export class CrearEspecialidadComponent {

  especialidades:any;
  FormEspecialidad!:FormGroup
  especialidad_id:any=null;
  constructor(
    private readonly authService: AuthService,
    private router: Router,
    private notificacion: ToastrService,
    private readonly especialidadService: EspecialidadService,
    private readonly eventEmitterService: EventEmitterService,
    private readonly formBuilder:FormBuilder,
    private matDialog: MatDialog,
  ) {
    authService.userInformation().subscribe((data) => {
      if (data.user.rol_id !== 1) {
        this.router.navigate(['home']);
      }
    });
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
        this.eventEmitterService.setEvent({event:'crear_especialidad'}); /* se crea para actualizar la tabla junto con el componente tabla */
        this.matDialog.closeAll(); /* se agrega para cerrar el formulario */
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
      this.eventEmitterService.setEvent({event:'crear_especialidad'}); /* se crea para actualizar la tabla junto con el componente tabla */
      this.matDialog.closeAll(); /* se agrega para cerrar el formulario */
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
