import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';

import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { MedicationFormComponent } from './medication-form/medication-form.component';

import { FilterPipe } from '../shared/pipe/filter.pipe';

@NgModule({
  declarations: [MedicamentosListaComponent, MedicationFormComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
