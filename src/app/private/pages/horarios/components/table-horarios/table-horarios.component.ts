import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { HorarioService } from 'src/app/private/services/horario.service';

@Component({
  selector: 'app-table-horarios',
  templateUrl: './table-horarios.component.html',
  styleUrls: ['./table-horarios.component.scss']
})
export class TableHorariosComponent {
  term!:string

  @Input() horarios:any;
  constructor(private horarioService:HorarioService,private toastService:ToastrService,private eventEmitter:EventEmitterService){
  }
  delete(id:any){
    this.horarioService.delete(id).subscribe((data)=>{
      this.toastService.success('Horario eliminado','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE_HORARIO'});
    })
  }
  edit(id:any){
      this.eventEmitter.setEvent({event:'EDIT_HORARIO',id:id});
  }
}
