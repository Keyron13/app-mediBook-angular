import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user!: any;
  @HostListener('click', ['$event.target'])
  onClick(target: HTMLDivElement) {
    const audio = new Audio('assets/sonidos/deslizar.mp3');
    console.log('llego');
    audio.play();
  }
  constructor(private authSerivce: AuthService) {
    this.authSerivce.userInformation().subscribe((data:any)=>{
      console.log(data.user)
      this.user=data.user;
    })
  }
}
