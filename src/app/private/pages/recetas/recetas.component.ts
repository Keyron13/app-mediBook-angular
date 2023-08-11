import { Component } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent {
  recetas:any
  user:any
  constructor(private recetaService:RecetaService,private authService:AuthService,private medicoService:MedicoService){

    this.authService.userInformation().subscribe((data)=>{
      this.user=data.user;
      if(data.user.rol_id==2){
        this.medicoService.allMedico().subscribe(data=>{
          console.log(data)
          this.recetas=data.Informacion.cita
        })
      }else if(data.user.rol_id==1){
        this.recetaService.obtenerTodos().subscribe((data)=>{
          this.recetas=data.recetas
        })
      }
    })

  }
}
