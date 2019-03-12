import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-forms',
  templateUrl: './subscribe-forms.component.html',
  styleUrls: ['./subscribe-forms.component.scss']
})
export class SubscribeFormsComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      captcha: new FormControl(
        '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',
        Validators.required
      )
    });
  }

  myClick() {
    console.log(this.form.value);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
