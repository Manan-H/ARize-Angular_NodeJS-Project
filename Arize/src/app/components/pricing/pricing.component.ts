import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  prices: any = [];
  priceForm: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPricing().subscribe(data => {
      return (this.prices = data);
    });

    this.priceForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      quantity_2d: new FormControl('', Validators.required),
      quantity_3d: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      captcha: new FormControl(
        '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',
        Validators.required
      )
    });
  }

  clickMe() {
    let pricingBtn = document.querySelectorAll('.pricing-btn-item');
    let pricingDesc = document.querySelectorAll('.pricing_option');
    for (let i = 0; i < pricingBtn.length; i++) {
      pricingBtn[i].classList.toggle('selected_btn');
      pricingDesc[i].classList.toggle('hideDiv');
    }
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  doPurchase() {
    let answer = document.querySelector('#success_message');
    answer.setAttribute('style', 'display: block;');
  }
}
