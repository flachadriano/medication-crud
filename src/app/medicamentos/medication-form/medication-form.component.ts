import { FormBuilder, ValidationErrors, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Form } from '../../shared/form';
import { MedicationService } from '../medication.service';
import { SharedService } from '../../shared/services/shared.service';

import { Medication } from '../../shared/interface/medication';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.sass']
})
export class MedicationFormComponent implements OnInit {

  public submitted: boolean;
  private _formMedication: Form;

  constructor(
    private medicationService: MedicationService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {
    this.submitted = false;
    this._formMedication = new Form(this.formBuilder);
  }

  public ngOnInit(): void {
    const formMedication = this.activeRoute.snapshot.data['medication'];
    this._formMedication.createForm(formMedication);
  }

  public get formMedication(): FormGroup {
    return this._formMedication.actionForm();
  }

  public hasError(field: string): ValidationErrors {
    return this._formMedication.actionForm().get(field).errors;
  }

  public onSubmit(): void {
    const form: Medication = this._formMedication.actionForm().value;
    this.submitted = true;

    !form.id ? this.addMedication(form) : this.updateMedication(form);
  }

  public onCancel(): void {
    this._formMedication.actionForm().reset();
  }

  private addMedication(form: Medication) {

    this.medicationService.addMedication(form).subscribe(val => {
      this.sharedService.alertSuccess('Salvo com Sucesso. Você séra redirecionando para lista em 3 Segundos');
      this.timer();
    }, erro => {
      this.sharedService.alertDanger(erro);
    });

  }

  private updateMedication(form: Medication) {

    this.medicationService.updateMedication(form).subscribe(val => {
      this.sharedService.alertSuccess('Atualizado com Sucesso. Você séra redirecionando para lista em 3 Segundos');
      this.timer();
    }, erro => {
      this.sharedService.alertDanger(erro);
    });

  }

  private timer(): void {
    setTimeout(() => {
      this.location.back();
    }, 3000);
  }

}
