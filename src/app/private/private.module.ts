import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PrivateRoutingModule } from './private-routing.module';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { TitulosComponent } from './pages/titulos/titulos.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { CitasComponent } from './pages/citas/citas.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { ObservacionesComponent } from './pages/observaciones/observaciones.component';
import { ReseniasComponent } from './pages/resenias/resenias.component';
import { PrivateComponent } from './private.component';
import { NavbarComponent } from '../core/shared/components/navbar/navbar.component';
import { TableTitulosComponent } from './pages/titulos/components/table-titulos/table-titulos.component';
@NgModule({
  declarations: [
    HomeComponent,
    EspecialidadComponent,
    TitulosComponent,
    MedicosComponent,
    HorariosComponent,
    ResetPasswordComponent,
    CitasComponent,
    PagosComponent,
    RecetasComponent,
    ObservacionesComponent,
    ReseniasComponent,
    PrivateComponent,
    NavbarComponent,
    TableTitulosComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class PrivateModule { }
