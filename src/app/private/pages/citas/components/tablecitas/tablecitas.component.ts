import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablecitas',
  templateUrl: './tablecitas.component.html',
  styleUrls: ['./tablecitas.component.scss']
})
export class TablecitasComponent {
term!:string
@Input() citas!:any
}
