import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';
import { UserService } from 'src/app/private/services/user.service';
import { ResetpasswordService } from 'src/app/private/services/resetpassword.service';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-crear-reset-password',
  templateUrl: './crear-reset-password.component.html',
  styleUrls: ['./crear-reset-password.component.scss']
})
export class CrearResetPasswordComponent {

  FormResetPassword!: FormGroup;
  users!:any
  constructor(private readonly authService: AuthService,private router:Router,
    private formBuilder: FormBuilder,
    private notificacion: ToastrService,
    private userService: UserService,
    private resetPasswordService: ResetpasswordService,
    private eventEmmiterService:EventEmitterService,
    private matDialog: MatDialog,
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
      this.matDialog.closeAll();
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
