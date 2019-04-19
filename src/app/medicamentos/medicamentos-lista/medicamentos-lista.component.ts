import { Component, OnInit, OnDestroy } from '@angular/core';
import { Medication } from '../medication';
import { MedicationService } from '../medication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medicamentos-lista',
  templateUrl: './medicamentos-lista.component.html',
  styleUrls: ['./medicamentos-lista.component.scss']
})
export class MedicamentosListaComponent implements OnInit, OnDestroy {

  public selectedAll: any;
  public sub: Subscription;
  public loading: boolean;
  private _medication: Array<Medication>;
  private check: Array<number | string>;

  constructor(
    private medicationService: MedicationService
  ) {
    this._medication = [];
    this.check = [];
    this.loading = false;
  }

  public ngOnInit(): void {
    this.onRequest();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public get medication(): Array<Medication> {
    return this._medication;
  }

  public selectAll(): void {
    this._medication.forEach(val => {
      val.selected = this.selectedAll;
      console.log(val.selected);
    });
  }

  public checkIfAllSelected(): void {
    this.selectedAll = this._medication.every(item => {
      return item.selected === true;
    });
  }

  public removeItem(): void {
    this.check = this._medication.filter(item => {
      return item.selected === true;
    }).map(val => val.id);

    console.log(this.check);
  }

  private onRequest(): void {
    this.sub =  this.medicationService.getAllMedication().subscribe(med => {
      this._medication = med;
      this.loading = true;
    }, (erro: Error) => {
      this.loading = false;
      console.log(erro);
    });
  }

}
