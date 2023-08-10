import { Component } from '@angular/core';
import { ReseniaService } from '../../services/resenia.service';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.scss']
})
export class ReseniasComponent {
  resenias:any
  constructor(private reseniaService:ReseniaService){
    this.reseniaService.obtenerTodos().subscribe((data)=>{
      this.resenias=data.Resenia
    })
  }
}
