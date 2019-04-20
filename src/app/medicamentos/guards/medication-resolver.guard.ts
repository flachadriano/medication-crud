import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Medication } from '../../shared/interface/medication';
import { MedicationService } from '../medication.service';

@Injectable({
  providedIn: 'root'
})

export class MedicationResolverGuard implements Resolve<Medication> {

  constructor(private medicationService: MedicationService) {}

  public resolve(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Medication | Observable<Medication> {
    const { params, params: { id } } = activeRoute;

    if (params && id) {
      return this.medicationService.getMedicationBy(id);
    }

    return of({
      id: null,
      name: null,
      selected: null,
      dosage: null,
      due_date: null
    });

  }

}
