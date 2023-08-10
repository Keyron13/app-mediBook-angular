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
import { TableHorariosComponent } from './pages/horarios/components/table-horarios/table-horarios.component';
import { TablecitasComponent } from './pages/citas/components/tablecitas/tablecitas.component';
import { TableespecialidadComponent } from './pages/especialidad/components/tableespecialidad/tableespecialidad.component';
import { TableobservacionesComponent } from './pages/observaciones/components/tableobservaciones/tableobservaciones.component';
import { TablepagosComponent } from './pages/pagos/components/tablepagos/tablepagos.component';
import { TablerecetasComponent } from './pages/recetas/components/tablerecetas/tablerecetas.component';
import { TablereseniasComponent } from './pages/resenias/components/tableresenias/tableresenias.component';
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
    TableHorariosComponent,
    TablecitasComponent,
    TableespecialidadComponent,
    TableobservacionesComponent,
    TablepagosComponent,
    TablerecetasComponent,
    TablereseniasComponent
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
