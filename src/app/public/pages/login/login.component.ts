import { Component, OnInit } from '@angular/core';
import { TweenMax, Sine } from 'gsap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    const loginButton = document.querySelector('#login-button') as HTMLElement;
    const container = document.querySelector('#container') as HTMLElement;
    const closeButton = document.querySelector('.close-btn') as HTMLElement;
    const forgottenButton = document.querySelector('#forgotten') as HTMLElement;
    const forgottenContainer = document.querySelector('#forgotten-container') as HTMLElement;

    loginButton.addEventListener('click', () => {
      TweenMax.from('#login-button', 0.4, { opacity: 1, ease: Sine.easeInOut });
      TweenMax.to('#login-button', 0.4, { opacity: 0, ease: Sine.easeInOut, onComplete: () => {
        container.style.display = 'block';
        TweenMax.from('#container', 0.4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to('#container', 0.4, { scale: 1, ease: Sine.easeInOut });
      }});
    });

    closeButton.addEventListener('click', () => {
      TweenMax.from('#container', 0.4, { scale: 1, ease: Sine.easeInOut });
      TweenMax.to('#container', 0.4, { left: '0px', scale: 0, ease: Sine.easeInOut, onComplete: () => {
        container.style.display = 'none';
        forgottenContainer.style.display = 'none';
        loginButton.style.display = 'block';
      }});
    });

    forgottenButton.addEventListener('click', () => {
      container.style.display = 'none';
      forgottenContainer.style.display = 'block';
    });
  }


}
