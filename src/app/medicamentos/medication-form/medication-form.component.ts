import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors } from '@angular/forms';

import { Form } from '../../shared/form';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.sass']
})
export class MedicationFormComponent implements OnInit {

  public submitted: boolean;
  private _formMedication: Form;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.submitted = false;
    this._formMedication = new Form(this.formBuilder);
  }

  ngOnInit() {
  }

  public get formMedication() {
    return this._formMedication.actionForm();
  }

  public hasError(field: string): ValidationErrors {
    console.log(field, 'ValidationErrors')
    return this._formMedication.actionForm().get(field).errors;
  }

  public onSubmit(): void {
    this.submitted = true;
    console.log(this._formMedication.actionForm().value);
  }

  public onCancel(): void {
    this._formMedication.actionForm().reset();
  }
}
