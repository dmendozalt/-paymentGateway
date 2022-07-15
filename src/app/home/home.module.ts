import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
  
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    PaymentComponent
  ]
})
export class HomeModule { }
