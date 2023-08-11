import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tableresenias',
  templateUrl: './tableresenias.component.html',
  styleUrls: ['./tableresenias.component.scss']
})
export class TablereseniasComponent {
  term!:string
  @Input() resenias!:any
}
