import { Component } from '@angular/core';
import { ObservacionService } from '../../services/observacion.service';
import { PagoService } from '../../services/pago.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent {
  pagos:any
  constructor(private pagoService:PagoService){
    this.pagoService.obtenerTodos().subscribe((data)=>{
      this.pagos=data.pagos
    })
  }
}
