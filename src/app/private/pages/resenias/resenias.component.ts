import { Component } from '@angular/core';
import { ReseniaService } from '../../services/resenia.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.scss']
})
export class ReseniasComponent {
  user:any
  resenias:any
  constructor(private reseniaService:ReseniaService,private authService:AuthService,private medicoService:MedicoService){
    this.authService.userInformation().subscribe((data)=>{
      this.user=data.user;
      if(data.user.rol_id==2){
        this.medicoService.allMedico().subscribe(data=>{
          console.log(data.Informacion)
          this.resenias=data.Informacion.cita
        })
      }else if(data.user.rol_id==1){
        this.reseniaService.obtenerTodos().subscribe((data)=>{
          this.resenias=data.Resenia
        })
      }
    })

  }
}
