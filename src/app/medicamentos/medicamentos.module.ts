import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';

@NgModule({
  declarations: [MedicamentosListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
