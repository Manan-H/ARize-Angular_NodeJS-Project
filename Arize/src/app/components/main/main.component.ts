import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.remove('gradient');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let navbar = document.querySelector('.navbar');
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number < 400) {
      navbar.classList.remove('gradient');
    } else {
      navbar.classList.add('gradient');
    }
  }
}
