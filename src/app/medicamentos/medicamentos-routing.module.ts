import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { MedicationFormComponent } from './medication-form/medication-form.component';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosListaComponent
  },
  {
    path: 'new',
    component: MedicationFormComponent
  },
  {
    path: 'edit/:id',
    component: MedicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
