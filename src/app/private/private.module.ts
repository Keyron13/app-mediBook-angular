import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [
  
    HomeComponent
  ],
  imports: [
    CommonModule,HttpClientModule, FormsModule,ReactiveFormsModule,SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
