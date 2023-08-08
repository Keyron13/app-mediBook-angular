import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivateComponent } from './private.component';


//Components


const routes: Routes = [
  {path : '',component:PrivateComponent,children:
  [
    {path:'home', component : HomeComponent,title:'Home' },

  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }