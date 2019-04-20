import { TestBed, async, inject } from '@angular/core/testing';

import { MedicationResolverGuard } from './medication-resolver.guard';

describe('MedicationResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicationResolverGuard]
    });
  });

  it('should ...', inject([MedicationResolverGuard], (guard: MedicationResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
