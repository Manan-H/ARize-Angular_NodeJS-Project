import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    let navbar = document.querySelector('.navbar');
    navbar.classList.add('gradient');
  }
}
