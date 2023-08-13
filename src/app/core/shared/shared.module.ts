import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

//componentes

@NgModule({
  declarations: [

    SpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    SpinnerComponent,
    MatDialogModule,
    MatButtonModule,
  ],
  providers:[

  ]
})
export class SharedModule { }
