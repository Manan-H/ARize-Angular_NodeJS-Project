import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus-modal',
  templateUrl: './contactus-modal.component.html',
  styleUrls: ['./contactus-modal.component.scss']
})
export class ContactusModalComponent implements OnInit {
  form: FormGroup;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl(''),
      'g-recaptcha-response': new FormControl(null, Validators.required)
    });
  }

  contactUs() {
    console.log(this.form.value);
    const success_message7 = document.querySelector(
      '#success_message7'
    ) as HTMLElement;
    const danger_message7 = document.querySelector(
      '#danger_message7'
    ) as HTMLElement;

    const formData = new FormData();
    formData.append('full_name', this.form.get('full_name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('comment', this.form.get('comment').value);
    formData.append(
      'g-recaptcha-response',
      this.form.get('g-recaptcha-response').value
    );

    this.httpClient
      .post<any>(
        'https://cors-anywhere.herokuapp.com/http://arize.io/assets/php/send1.php',
        formData
      )
      .subscribe(
        res => {
          console.log(res);
          success_message7.style.display = 'block';
        },
        err => {
          console.log(err);
          danger_message7.style.display = 'block';
        }
      );
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
