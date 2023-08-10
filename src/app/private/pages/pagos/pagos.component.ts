import { Component } from '@angular/core';
import { ObservacionService } from '../../services/observacion.service';
import { PagoService } from '../../services/pago.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent {
  pagos:any
  user:any
  constructor(private pagoService:PagoService,private authService:AuthService,private medicoService:MedicoService){
    this.authService.userInformation().subscribe((data)=>{
      this.user=data.user;
      if(data.user.rol_id==2){
        this.medicoService.allMedico().subscribe(data=>{
          console.log(data)
          this.pagos=data.Informacion.pago
        })
      }else if(data.user.rol_id==1){
        this.pagoService.obtenerTodos().subscribe((data)=>{
          this.pagos=data.pagos
        })
      }
    })

  }
}
