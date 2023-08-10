import { Component } from '@angular/core';
import { ObservacionService } from '../../services/observacion.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss']
})
export class ObservacionesComponent {
  observaciones:any
  constructor(private observacionService:ObservacionService){
    this.observacionService.obtenerTodos().subscribe((data)=>{
      this.observaciones=data.CitaObservacion
    })
  }
}
