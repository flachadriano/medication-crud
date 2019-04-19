import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosListaComponent } from './medicamentos-lista.component';

describe('MedicamentosListaComponent', () => {
  let component: MedicamentosListaComponent;
  let fixture: ComponentFixture<MedicamentosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
