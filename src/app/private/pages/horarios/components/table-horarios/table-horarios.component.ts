import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { HorarioService } from 'src/app/private/services/horario.service';
import { CrearHorarioComponent } from '../crear-horario/crear-horario.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-horarios',
  templateUrl: './table-horarios.component.html',
  styleUrls: ['./table-horarios.component.scss']
})
export class TableHorariosComponent {
  term!:string

  @Input() horarios:any;
  @Input() user:any;

  constructor(private horarioService:HorarioService,private toastService:ToastrService,private eventEmitter:EventEmitterService,public dialog: MatDialog )
  {
    this.eventEmitter.getEvent().subscribe(event => {
      if(event.event=="crear_horario"){ /* esto es el llamado con su nombre que esta en el crear */
        this.getHorarios();
      }
    })
  }

  getHorarios() {  /* esto se escogio de el crear del metodo get */
    this.horarioService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.horarios = data.Horario;
    });
  }

  delete(id:any){
    this.horarioService.delete(id).subscribe((data)=>{
      this.toastService.success('Horario eliminado','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE_HORARIO'});
    })
  }
  edit(id:any){
    this.eventEmitter.setEvent({event:'EDIT_HORARIO',id:id});
    this.openDialog();
  }

  openDialog(){
    this.dialog.open(CrearHorarioComponent,{width:'50%', height:'550px'});
  }
}
