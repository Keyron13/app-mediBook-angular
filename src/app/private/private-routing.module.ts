import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivateComponent } from './private.component';
import { CitasComponent } from './pages/citas/citas.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { ObservacionesComponent } from './pages/observaciones/observaciones.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { ReseniasComponent } from './pages/resenias/resenias.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { TitulosComponent } from './pages/titulos/titulos.component';

//Components

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'citas', component: CitasComponent, title: 'Citas' },
      {
        path: 'especialidad',
        component: EspecialidadComponent,
        title: 'Especialidad',
      },
      { path: 'horarios', component: HorariosComponent, title: 'Horarios' },
      { path: 'medicos', component: MedicosComponent, title: 'Medicos' },
      {
        path: 'observaciones',
        component: ObservacionesComponent,
        title: 'Observaciones',
      },
      { path: 'pagos', component: PagosComponent, title: 'Pagos' },
      { path: 'recetas', component: RecetasComponent, title: 'Recetas' },
      { path: 'resenias', component: ReseniasComponent, title: 'Reseñas' },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'ResetPassword',
      },
      { path: 'titulos', component: TitulosComponent, title: 'Titulos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
