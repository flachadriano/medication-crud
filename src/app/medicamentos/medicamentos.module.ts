import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { MedicationFormComponent } from './medication-form/medication-form.component';

@NgModule({
  declarations: [MedicamentosListaComponent, MedicationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
