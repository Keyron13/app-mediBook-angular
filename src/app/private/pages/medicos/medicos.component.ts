import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent {
  constructor(private readonly authService: AuthService,private router:Router){
    authService.userInformation().subscribe(data=>{
      if(data.user.rol_id!==1){
        this.router.navigate(['home']);
      }
    });
}
}
