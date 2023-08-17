import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';
import { map } from 'rxjs';
import { EventEmitterService } from '../../services/eventEmitter.service';
import { ToastrService } from 'ngx-toastr';

import {MatDialog} from '@angular/material/dialog';
import { CrearmedicoComponent } from './components/crearmedico/crearmedico.component';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
})
export class MedicosComponent{

  term!: string;
  eventEmitterService: any;

  constructor(private readonly authService: AuthService,private router:Router,
    private medico:MedicoService,private eventEmitter:EventEmitterService,
    private notificacion:ToastrService,
    public dialog: MatDialog,){

      if(localStorage.getItem('rol')!=='Admin'){
        this.router.navigate(['/home'])
      }

    eventEmitter.getEvent().subscribe(even=>{
      if(even.event=='DELETE_MEDICO'||even.event=='CREATE_MEDICO'){
        this.getMedico();
      }
    })

    this.medicos = this.medico
      .obtenerTodos()
      .pipe(map((data) => data.medicos));
    this.getMedico();

  }

  medicos!:any;
  getMedico() {
    this.medico.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.medicos = data.medicos;
    });
  }

  delete(id:any){
    this.medico.delete(id).subscribe((data)=>{
      this.notificacion.success('Medico eliminado','Proceso exitoso');
      this.eventEmitter.setEvent({event:'DELETE_MEDICO'});
    })
  }

  edit(id:any){
    this.openDialog();
    this.eventEmitter.setEvent({event:'EDIT_MEDICO',id:id});
  }

  openDialog(){
    this.dialog.open(CrearmedicoComponent,{width:'70%'});
  }

}
