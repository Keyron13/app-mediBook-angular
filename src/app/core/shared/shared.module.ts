import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

//componentes

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    RouterModule,
    HttpClientModule,
  ],
  providers:[

  ]
})
export class SharedModule { }