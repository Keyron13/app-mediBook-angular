import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { EventEmitterService } from 'src/app/private/services/eventEmitter.service';
import { MedicoService } from 'src/app/private/services/medico.service';
import { TituloService } from 'src/app/private/services/titulo.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-crear-titulo',
  templateUrl: './crear-titulo.component.html',
  styleUrls: ['./crear-titulo.component.scss']
})
export class CrearTituloComponent {
  today = new Date();
  medicos!: Observable<any>;
  titulos: any;
  titulo_id: any=null;
  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private notificacion: ToastrService,
    private readonly authService: AuthService,
    private readonly tituloService: TituloService,
    private readonly medicoService: MedicoService,
    private eventEmitter: EventEmitterService,
    private readonly eventEmitterService: EventEmitterService,
    private matDialog: MatDialog
  ) {
    authService.userInformation().subscribe((data) => {
      if (data.user.rol_id !== 1) {
        this.router.navigate(['home']);
      }
    },()=>{
      this.router.navigate(['home']);
    });

    this.medicos = this.medicoService
      .obtenerTodos()
      .pipe(map((data) => data.medicos));
    this.getTitulos();
    this.eventEmitter.getEvent().subscribe((data) => {
      if (data.event === 'DELETE') {
        this.getTitulos();
      }
      if (data.event === 'EDIT_TITULO') {
        this.titulo_id = data.id;
        this.findTituloFillForm(data.id);
      }
    });
  }
  ngOnInit(): void {
    this.buildForm();
  }
  FormTitulo!: FormGroup;
  buildForm() {
    this.FormTitulo = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      medico_id: ['', [Validators.required]],
    });
  }

  onSubmitTitulo() {
    if (this.FormTitulo.invalid) {
      this.notificacion.warning('Formulario invalido', 'Proceso erroneo');
      // Realiza acciones si el formulario es inválido
      return;
    } else {
      if(this.titulo_id!=null){
       return this.editTitulo(this.FormTitulo.value);
      }
      this.tituloService.create(this.FormTitulo.value).subscribe((data) => {
        this.notificacion.success(
          'Titulo creado correctamente',
          'Proceso exitoso'
        );
        this.getTitulos();
        this.eventEmitterService.setEvent({event:'crear_titulo'}); /* se crea para actualizar la tabla junto con el componente tabla */
        this.matDialog.closeAll(); /* se agrega para cerrar el formulario */
        this.FormTitulo.reset();

      });
    }
  }
  getFormattedDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    return `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
  }
  getTitulos() {
    this.tituloService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.titulos = data.titulos;
    });
  }
  findTituloFillForm(id: any) {
    this.tituloService.obtenerUno(id).subscribe((data) => {
      console.log(data.titulos);
      this.FormTitulo.setValue({
        nombre: data.titulos.nombre,
        fecha: data.titulos.fecha,
        medico_id: data.titulos.medico_id,
      });
    this.FormTitulo.get('medico_id')?.disable();

    });

  }
  editTitulo(body:any){
      this.tituloService.update(body,this.titulo_id).subscribe(data=>{
        this.notificacion.success('Titulo actualizado','Proceso exitoso');
        this.getTitulos();
        this.eventEmitterService.setEvent({event:'crear_titulo'}); /* se crea para actualizar la tabla junto con el componente tabla */
        this.matDialog.closeAll(); /* se agrega para cerrar el formulario */
        this.FormTitulo.reset();
        this.titulo_id=null;
    this.FormTitulo.get('medico_id')?.enable();

      })
  }
}
