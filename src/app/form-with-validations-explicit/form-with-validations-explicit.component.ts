import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations-explicit',
  templateUrl: './form-with-validations-explicit.component.html',
  styleUrls: ['./form-with-validations-explicit.component.css']
})
export class FormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
