import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablerecetas',
  templateUrl: './tablerecetas.component.html',
  styleUrls: ['./tablerecetas.component.scss']
})
export class TablerecetasComponent {
  term!:string
  @Input() recetas!:any
}
