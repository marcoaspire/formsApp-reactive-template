import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
//
import { TemplateRoutingModule } from './template-routing.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';
import { BasicsComponent } from './basics/basics.component';
import { CustomMinDirective } from './directives/custom-min.directives';


@NgModule({
  declarations: [
    DynamicComponent,
    SwitchesComponent,
    BasicsComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
  ]
})
export class TemplateModule { }
