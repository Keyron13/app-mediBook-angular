import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadService } from 'src/app/private/services/especialidad.service';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { CrearEspecialidadComponent } from '../crear-especialidad/crear-especialidad.component';

@Component({
  selector: 'app-tableespecialidad',
  templateUrl: './tableespecialidad.component.html',
  styleUrls: ['./tableespecialidad.component.scss']
})
export class TableespecialidadComponent {
  term!:string
  @Input() especialidades!:any;
  constructor(private especialidadService:EspecialidadService,private toastService:ToastrService,private eventEmitter:EventEmitterService, public dialog: MatDialog,)
  {
    this.eventEmitter.getEvent().subscribe(event => {
      if(event.event=="crear_especialidad"){ /* esto es el llamado con su nombre que esta en el crear */
        this.getEspecialidades();
      }
    })
  }

  getEspecialidades() {  /* esto se escogio de el crear del metodo get */
    this.especialidadService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.especialidades = data.especialidades;
    });
  }

  delete(id:any){
    this.especialidadService.delete(id).subscribe((data)=>{
      this.toastService.success('Especialidad eliminada','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE_ESPECIALIDAD'});
    })
  }
  edit(id:any){
    this.openDialog();
    this.eventEmitter.setEvent({event:'EDIT_ESPECIALIDAD',id:id});
  }

  openDialog(){
    this.dialog.open(CrearEspecialidadComponent,{width:'50%', height:'350px'});
  }

}
