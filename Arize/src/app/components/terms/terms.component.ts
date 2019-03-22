import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    let navbar = document.querySelector('.navbar');
    navbar.classList.add('gradient');
  }
}
