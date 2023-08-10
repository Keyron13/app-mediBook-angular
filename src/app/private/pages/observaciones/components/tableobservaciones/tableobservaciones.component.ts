import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tableobservaciones',
  templateUrl: './tableobservaciones.component.html',
  styleUrls: ['./tableobservaciones.component.scss']
})
export class TableobservacionesComponent {
  term!:string
  @Input() observaciones!:any
}
