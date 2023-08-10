import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';
import { UserService } from '../../services/user.service';
import { Observable, map } from 'rxjs';
import { ResetpasswordService } from '../../services/resetpassword.service';
import { EventEmitterService } from '../../services/eventEmitter.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  FormResetPassword!: FormGroup;
  users!:any
  constructor(private readonly authService: AuthService,private router:Router,
    private formBuilder: FormBuilder,
    private notificacion: ToastrService,
    private userService: UserService,
    private resetPasswordService: ResetpasswordService,
    private eventEmmiterService:EventEmitterService
){
    authService.userInformation().subscribe(data=>{
      if(data.user.rol_id!==1){
        this.router.navigate(['home']);
      }
    },()=>{
      this.router.navigate(['home']);
    });
    this.buildForm();
    /* this.users=this.userService.obtenerTodos().pipe(map(res=>res.pacientes+res.medicos)); */
    this.userService.obtenerTodos().subscribe((data)=>{
      this.users=[...data.pacientes, ...data.medicos];
    });
    this.eventEmmiterService.getEvent().subscribe(data=>{
      if(data.event=='SELECCION_USER_RESET_PASSWORD'){
        this.FormResetPassword.get('user_id')?.setValue(data.id)
      }
    })
}

onSubmit(value:any){
  if(this.FormResetPassword.invalid){
    this.notificacion.warning('Formulario invalido', 'Proceso erroneo');
  }else{
    const body={
      "newPassword":this.FormResetPassword.get('password')?.value
    }
    const id=this.FormResetPassword.get('user_id')?.value
    this.resetPasswordService.resetPassword(body,id).subscribe((data)=>{
      this.notificacion.success('Contraseña cambiada exitosamente','Proceso exitoso');
      this.FormResetPassword.reset()
    })
  }
}
buildForm() {
  this.FormResetPassword = this.formBuilder.group({
    password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    user_id: ['', [Validators.required]],
  });
}
}
