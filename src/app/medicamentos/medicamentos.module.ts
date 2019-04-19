import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';

@NgModule({
  declarations: [MedicamentosListaComponent],
  imports: [
    CommonModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
