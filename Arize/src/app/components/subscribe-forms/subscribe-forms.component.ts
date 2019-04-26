import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscribe-forms',
  templateUrl: './subscribe-forms.component.html',
  styleUrls: ['./subscribe-forms.component.scss']
})
export class SubscribeFormsComponent implements OnInit {
  form: FormGroup;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      recaptchaReactive: new FormControl(null, Validators.required)
    });
  }

  myClick() {
    console.log(this.form.value);
    let location = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('location', location);
    formData.append('captcha', this.form.get('recaptchaReactive').value);

    this.httpClient
      .post<any>(
        'https://cors-anywhere.herokuapp.com/http://arize.io/assets/php/subscribe.php',
        formData
      )
      .subscribe(
        res => {
          console.log(res);
          document.getElementById('answer').innerHTML = res;
        },
        err => {
          console.log(err);
          document.getElementById('answer').innerHTML = err;
        }
      );
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
