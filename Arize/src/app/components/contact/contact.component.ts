import { Component, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  lat1: number = 52.05792;
  lng1: number = 4.492173;
  markerLat1: number = 52.05792;
  markerLng1: number = 4.492173;

  lat2: number = 40.1832;
  lng2: number = 44.5265;
  markerLat2: number = 40.1832;
  markerLng2: number = 44.5265;

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    let navbar = document.querySelector('.navbar');
    navbar.classList.add('gradient');

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(''),
      captcha: new FormControl(
        '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',
        Validators.required
      )
    });
  }

  contactUs() {
    console.log(this.form.value);
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
