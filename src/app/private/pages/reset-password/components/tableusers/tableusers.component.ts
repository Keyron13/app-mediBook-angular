import { Component, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { CrearResetPasswordComponent } from '../crear-reset-password/crear-reset-password.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-tableusers',
  templateUrl: './tableusers.component.html',
  styleUrls: ['./tableusers.component.scss']
})
export class TableusersComponent {
  term!:string;
  @Input() users:any;
  constructor(private eventEmitterService:EventEmitterService,  public dialog: MatDialog){}
  seleccion(user_id:any){
    console.log('emitir seleccion')
    this.eventEmitterService.setEvent({
      event:'SELECCION_USER_RESET_PASSWORD',
      id:user_id
    })
  }

   openDialog(){
    this.dialog.open(CrearResetPasswordComponent,{width:'50%', height:'500px'});
  }
}
