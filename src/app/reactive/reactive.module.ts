import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
//
import { BasicsComponent } from './basics/basics.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
