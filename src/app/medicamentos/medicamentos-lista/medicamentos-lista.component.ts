import { Component, OnInit } from '@angular/core';
import { Medication } from '../medication';
import { MedicationService } from '../medicamentos.service';

@Component({
  selector: 'app-medicamentos-lista',
  templateUrl: './medicamentos-lista.component.html',
  styleUrls: ['./medicamentos-lista.component.scss']
})
export class MedicamentosListaComponent implements OnInit {

  public selectedAll: any;
  private _medication: Array<Medication>;
  private check: Array<number | string>;

  constructor(
    private medicationService: MedicationService
  ) {
    this._medication = [];
    this.check = [];
  }

  public ngOnInit(): void {
    this.onRequest();
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
    this.medicationService.getAllMedication().subscribe(med => {
      this._medication = med;
    }, (erro: Error) => {
      console.log(erro);
    });
  }

}
