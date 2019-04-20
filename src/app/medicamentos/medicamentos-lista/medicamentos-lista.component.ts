import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Medication } from '../medication';
import { MedicationService } from '../medication.service';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-medicamentos-lista',
  templateUrl: './medicamentos-lista.component.html',
  styleUrls: ['./medicamentos-lista.component.scss']
})
export class MedicamentosListaComponent implements OnInit, OnDestroy {

  public selectedAll: any;
  public sub: Subscription;
  public loading: boolean;
  private check: Array<number | string>;
  private _medication: Array<Medication>;

  constructor(
    private medicationService: MedicationService,
    private sharedService: SharedService
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
    }, (erro) => {
      console.log(erro);
      this.loading = true;
      this.hanlderErro(erro);
    });
  }

  private hanlderErro(message: string): void {
    this.sharedService.alertDanger(message);
  }
}
