import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus-forms',
  templateUrl: './contactus-forms.component.html',
  styleUrls: ['./contactus-forms.component.scss']
})
export class ContactusFormsComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(''),
      recaptchaReactive: new FormControl(null, Validators.required)
    });
  }

  contactUs() {
    console.log(this.form.value);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
