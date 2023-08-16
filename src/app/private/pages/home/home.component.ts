import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLDivElement) {
  const audio = new Audio('assets/sonidos/deslizar.mp3');
  console.log('llego');
  audio.play();
}

}
