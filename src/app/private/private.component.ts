import { Component } from '@angular/core';
import { AuthService } from '../public/services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {
  user:any;
  constructor(private authService:AuthService){
    authService.userInformation().subscribe((data)=>{
      this.user=data.user;
      console.log(this.user)
    })
  }
}
