import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    let navbar = document.querySelector('.navbar');
    navbar.classList.add('gradient');
  }
}
