import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() user:any;
  constructor(private authService: AuthService,private toastService: ToastrService,private router:Router){

  }
  logout(){
    this.authService.logout().subscribe(data=>{
      localStorage.removeItem('rol');
      this.authService.deleteToken();
      this.router.navigate(['/login']);
      this.toastService.success('Has finalizado la sesión','Proceso exitoso')
    });
  }
}
