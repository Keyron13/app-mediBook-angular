import { Component } from '@angular/core';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent {
  recetas:any
  constructor(private recetaService:RecetaService){
    this.recetaService.obtenerTodos().subscribe((data)=>{
      this.recetas=data.recetas
    })
  }
}
