import { Component, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';

@Component({
  selector: 'app-tableusers',
  templateUrl: './tableusers.component.html',
  styleUrls: ['./tableusers.component.scss']
})
export class TableusersComponent {
  term!:string;
  @Input() users:any;
  constructor(private eventEmitterService:EventEmitterService){}
  seleccion(user_id:any){
    console.log('emitir seleccion')
    this.eventEmitterService.setEvent({
      event:'SELECCION_USER_RESET_PASSWORD',
      id:user_id
    })
  }
}
