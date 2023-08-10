import { Component } from '@angular/core';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent {
  citas:any
  constructor(private citasService:CitaService){
    this.citasService.obtenerTodos().subscribe((data)=>{
      this.citas=data.citas
    })
  }
}
