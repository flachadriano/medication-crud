import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
