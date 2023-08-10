import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { TituloService } from 'src/app/private/services/titulo.service';

@Component({
  selector: 'app-table-titulos',
  templateUrl: './table-titulos.component.html',
  styleUrls: ['./table-titulos.component.scss']
})
export class TableTitulosComponent {
  @Input() titulos:any;
  constructor(private tituloService:TituloService,private toastService:ToastrService,private eventEmitter:EventEmitterService){
  }
  delete(id:any){
    this.tituloService.delete(id).subscribe((data)=>{
      this.toastService.success('Titulo eliminado','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE'});
    })
  }
  edit(id:any){
      this.eventEmitter.setEvent({event:'EDIT_TITULO',id:id});
  }

}
