import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Medication } from '../medication';
import { MedicationService } from '../medication.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Cols } from '../cols';
@Component({
  selector: 'app-medicamentos-lista',
  templateUrl: './medicamentos-lista.component.html',
  styleUrls: ['./medicamentos-lista.component.scss']
})
export class MedicamentosListaComponent implements OnInit, OnDestroy {

  public selectedAll: any;
  public sub: Subscription;
  public loading: boolean;
  public noregister: boolean;

  private check: Array<number |string>;
  private _medication: Array<Medication>;

  constructor(
    private medicationService: MedicationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this._medication = [];
    this.check = [];
    this.loading = false;
    this.noregister = true;
  }

  public ngOnInit(): void {
    this.onRequest();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public get cols(): Array<Cols> {
    return [
      { 'field': 'name', 'label': 'Name' },
      { 'field': 'dosage', 'label': 'Dosage' },
      { 'field': 'due_date', 'label': 'Due date' },
      { 'field': 'actions', 'label': 'Actions' }
    ];
  }

  public get medication(): Array<Medication> {
    return this._medication;
  }

  public selectAll(): void {
    for (const val of this._medication) {
      val.selected = this.selectedAll;
    }
  }

  public checkIfAllSelected(): void {
    this.selectedAll = this._medication.every(item => {
      return item.selected === true;
    });
  }

  public onDelete(): void {
    this.check = this._medication.filter(item => {
      return item.selected === true;
    }).map(val => val.id);

    this.medicationService.removeMedication(this.check).subscribe(val => {
      this.onRequest();
    }, (erro) => {
      this.hanlderErro(erro);
    });
  }

  public onEdit(id: any): void {
    this.router.navigate(['edit', id], { relativeTo: this.activeRoute});
  }

  private onRequest(): void {
    this.sub = this.medicationService.getAllMedication().subscribe(med => {
      this._medication = med;
      this.loading = true;
      this.noregister = !!this.medication.length;
    }, (erro) => {
      this.loading = true;
      this.hanlderErro(erro);
    });
  }

  private hanlderErro(message: string): void {
    this.sharedService.alertDanger(message);
  }

}
