import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class Form {

  private _actionForm: FormGroup;
  private builder: FormBuilder;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.builder = formBuilder;
    this.createForm();
  }

  public actionForm(): FormGroup {
    return this._actionForm;
  }

  private createForm() {
    this._actionForm = this.builder.group({
      id: '',
      name: [null, Validators.required],
      dosage: [null, Validators.required],
      due_date: [null, Validators.required]
    });
  }

}
