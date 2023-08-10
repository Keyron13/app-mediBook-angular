import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss']
})
export class EspecialidadComponent {
  constructor(private readonly authService: AuthService,private router:Router){
    authService.userInformation().subscribe(data=>{
      if(data.user.rol_id!==1){
        this.router.navigate(['home']);
      }
    });
}
}
