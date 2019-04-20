import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Medication } from '../medicamentos/medication';

export class Form {

  private _actionForm: FormGroup;
  private builder: FormBuilder;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.builder = formBuilder;
  }

  public actionForm(): FormGroup {
    return this._actionForm;
  }

  public createForm(form: Medication): void {
    this._actionForm = this.builder.group({
      id: [form.id],
      name: [form.name, Validators.required],
      dosage: [form.dosage, Validators.required],
      due_date: [form.due_date, Validators.required]
    });
  }

}
