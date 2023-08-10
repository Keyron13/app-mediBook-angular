import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablepagos',
  templateUrl: './tablepagos.component.html',
  styleUrls: ['./tablepagos.component.scss']
})
export class TablepagosComponent {
  term!:string
  @Input() pagos!:any
}
