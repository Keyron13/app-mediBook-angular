import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';

//componentes

@NgModule({
  declarations: [

    SpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    SpinnerComponent

  ],
  providers:[

  ]
})
export class SharedModule { }
