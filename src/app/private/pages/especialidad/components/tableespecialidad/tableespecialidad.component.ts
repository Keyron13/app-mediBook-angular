import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadService } from 'src/app/private/services/especialidad.service';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';

@Component({
  selector: 'app-tableespecialidad',
  templateUrl: './tableespecialidad.component.html',
  styleUrls: ['./tableespecialidad.component.scss']
})
export class TableespecialidadComponent {
  term!:string
  @Input() especialidades!:any;
  constructor(private especialidadService:EspecialidadService,private toastService:ToastrService,private eventEmitter:EventEmitterService){
  }
  delete(id:any){
    this.especialidadService.delete(id).subscribe((data)=>{
      this.toastService.success('Especialidad eliminada','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE_ESPECIALIDAD'});
    })
  }
  edit(id:any){
      this.eventEmitter.setEvent({event:'EDIT_ESPECIALIDAD',id:id});
  }
}
