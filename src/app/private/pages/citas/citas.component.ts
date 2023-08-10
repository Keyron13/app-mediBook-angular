import { Component } from '@angular/core';
import { CitaService } from '../../services/cita.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent {
  citas:any
  constructor(private citasService:CitaService,private authService:AuthService,private medicoService:MedicoService){
    this.authService.userInformation().subscribe((data)=>{
      if(data.user.rol_id==2){
        this.medicoService.allMedico().pipe(map((data:any)=>data.Informacion.cita)).subscribe(data=>{
          this.citas=data
        })
      }else if(data.user.rol_id==1){
        this.citasService.obtenerTodos().subscribe((data)=>{
          this.citas=data.citas
        })
      }
    })

  }
}
