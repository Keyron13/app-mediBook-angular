import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { TituloService } from 'src/app/private/services/titulo.service';
import { CrearTituloComponent } from '../crear-titulo/crear-titulo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-titulos',
  templateUrl: './table-titulos.component.html',
  styleUrls: ['./table-titulos.component.scss']
})
export class TableTitulosComponent {
  term!:string
  @Input() titulos:any;
  constructor(private tituloService:TituloService,private toastService:ToastrService,private eventEmitter:EventEmitterService, public dialog: MatDialog)
  {
    this.eventEmitter.getEvent().subscribe(event => {
      if(event.event=="crear_titulo"){ /* esto es el llamado con su nombre que esta en el crear */
        this.getTitulos();
      }
    })
  }

  getTitulos() {  /* esto se escogio de el crear del metodo get */
    this.tituloService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.titulos = data.titulos;
    });
  }

  delete(id:any){
    this.tituloService.delete(id).subscribe((data)=>{
      this.toastService.success('Titulo eliminado','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE'});
    })
  }
  edit(id:any){
    this.openDialog();
    this.eventEmitter.setEvent({event:'EDIT_TITULO',id:id});
  }

  openDialog(){
    this.dialog.open(CrearTituloComponent,{width:'50%', height:'500px'});
  }

}
