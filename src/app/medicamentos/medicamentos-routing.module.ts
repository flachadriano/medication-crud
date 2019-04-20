import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { MedicationFormComponent } from './medication-form/medication-form.component';
import { MedicationResolverGuard } from './guards/medication-resolver.guard';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosListaComponent
  },
  {
    path: 'new',
    component: MedicationFormComponent,
    resolve: {
      medication: MedicationResolverGuard
    }
  },
  {
    path: 'edit/:id',
    component: MedicationFormComponent,
    resolve: {
      medication: MedicationResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
