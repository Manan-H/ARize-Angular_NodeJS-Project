import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url = window.location.pathname;
  myUrl = '/blogs';
  number =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  ngDoCheck() {}

  smoothScroll(element) {
    document
      .querySelector(element)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // doGradient(): void {
  //   let navbar = document.querySelector('.navbar');
  //   const number =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   if (window.location.pathname == '/') {
  //     navbar.classList.remove('gradient');
  //     if (number < 400) {
  //       navbar.classList.remove('gradient');
  //     } else {
  //       navbar.classList.add('gradient');
  //     }
  //   } else {
  //     navbar.classList.add('gradient');
  //   }
  // }

  // clickToggler() {
  //   let navbarCollapse = document.querySelector('.navbar-collapse');
  //   navbarCollapse.classList.add('gradient');
  //   navbarCollapse.setAttribute('style', 'height = 500px');
  // }

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
