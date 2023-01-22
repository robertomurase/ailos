import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Output() fireFormState = new EventEmitter();

  @Input() formSubmitted: boolean = false;
  @Input() formValid: boolean = false;

  public form!: FormGroup;
  public usuario!: Usuario;

  ngOnInit(): void {
    this.buildForm();

    document.addEventListener(
      'clearForm',
      (e) => {
        this.form.controls['cpf'].setValue('');
        console.log('entrou');
      },
      false
    );
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          CustomValidator.CPF,
          Validators.minLength(14),
          Validators.maxLength(14),
        ]),
      ],
    });
  }

  public onCpfChange() {
    this.formSubmitted = false;
    console.log(this.formSubmitted);
  }

  public submitForm() {
    this.formValid = this.form.valid;
    this.formSubmitted = true;
    if (this.form.valid) {
      this.fireFormState.emit({
        formSubmitted: this.formSubmitted,
        formValid: this.formValid,
      });
    }
  }
}
