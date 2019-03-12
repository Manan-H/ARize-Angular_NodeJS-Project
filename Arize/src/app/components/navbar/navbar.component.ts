import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
