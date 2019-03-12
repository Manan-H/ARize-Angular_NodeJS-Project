import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  prices: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPricing().subscribe(data => {
      return (this.prices = data);
    });
  }

  clickMe(e) {
    const target = e as HTMLTextAreaElement;
    console.log(target);

    let pricingBtn = document.querySelectorAll('.pricing-btn-item');
    let pricingDesc = document.querySelectorAll('.pricing_option');
    for (let i = 0; i < pricingBtn.length; i++) {
      pricingBtn[i].classList.toggle('selected_btn');
      pricingDesc[i].classList.toggle('hideDiv');
    }
  }
}
