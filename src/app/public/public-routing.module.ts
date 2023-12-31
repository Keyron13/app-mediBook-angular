import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path : '',component:PublicComponent,children:
  [
    {path:'',redirectTo:'login',pathMatch: 'full'},
    {path:'login', component : LoginComponent,title:'Login' },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }