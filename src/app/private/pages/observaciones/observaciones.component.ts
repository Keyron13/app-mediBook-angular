import { Component } from '@angular/core';
import { ObservacionService } from '../../services/observacion.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { map } from 'rxjs';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss']
})
export class ObservacionesComponent {
  user:any;
  observaciones:any
  constructor(private observacionService:ObservacionService,private authService:AuthService,private medicoService:MedicoService){
    this.authService.userInformation().subscribe((data)=>{

      this.user=data.user;
      if(data.user.rol_id==2){
        this.medicoService.allMedico().subscribe(data=>{
          this.observaciones=data.Informacion.cita
          console.log(this.observaciones)
        })
      }else if(data.user.rol_id==1){
        this.observacionService.obtenerTodos().subscribe((data)=>{
          this.observaciones=data.CitaObservacion
        })
      }
    })

  }
}
