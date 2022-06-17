import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaAdmissaoComponent } from './nova-admissao/nova-admissao.component';
import { SharedModule } from '../shared/shared.module';
import { CooperadoRoutingModule } from './cooperado-routing.module';



@NgModule({
  declarations: [
    NovaAdmissaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CooperadoRoutingModule
  ]
})
export class CooperadoModule { }
