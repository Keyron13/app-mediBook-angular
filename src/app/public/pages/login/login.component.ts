import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweenMax, Sine } from 'gsap';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private readonly router: Router,private readonly authService: AuthService,
    private formBuilder: FormBuilder,private notificacion:ToastrService,) {}
  ngOnInit(): void {
    this.buildForm();
    const loginButton = document.querySelector('#login-button') as HTMLElement;
    const container = document.querySelector('#container') as HTMLElement;

    loginButton.addEventListener('click', () => {
      TweenMax.from('#login-button', 0.4, { opacity: 1, ease: Sine.easeInOut });
      TweenMax.to('#login-button', 0.4, { opacity: 0, ease: Sine.easeInOut, onComplete: () => {
        container.style.display = 'block';
        TweenMax.from('#container', 0.4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to('#container', 0.4, { scale: 1, ease: Sine.easeInOut });
      }});
    });

  }

FormLogin!: FormGroup;
buildForm() {
  this.FormLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  });
}
Login(form: any) {
  if (this.FormLogin.invalid) {
    // Marcar los campos del formulario como tocados para mostrar los mensajes de error
    Object.values(this.FormLogin.controls).forEach((control) =>
      control.markAsTouched(),
    );
    return;
  } else {
    this.authService.login(form).subscribe((data) => {
      this.authService.setToken(data.access_token);
      this.notificacion.success("Inicio de sesión exitoso",'Proceso Exitoso');
      this.router.navigate(['home']);
    });
  }
}
}
