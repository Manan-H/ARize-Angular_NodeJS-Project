import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appLink: string = '';

  constructor() {}

  ngOnInit() {
    this.isMobileDevice();

    this.detectmob();
    console.log(this.appLink);
  }

  isMobileDevice() {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    );
  }

  detectmob() {
    if (this.isMobileDevice()) {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        console.log('Android');
        this.appLink =
          'https://play.google.com/store/apps/details?id=com.Triplee.TripleeSocial';
      } else if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i)
      ) {
        console.log('Android');
        this.appLink =
          'https://itunes.apple.com/am/app/triple-e/id1230115561?mt=8';
      }
    } else {
      console.log('Not mobile');
    }
  }

  smoothScroll(element) {
    document
      .querySelector(element)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  clickToggler() {
    document.querySelector('.navbar-collapse').classList.toggle('collapse-bgd');
    document.querySelector('.arize-navbar').classList.add('collapse-bgd');
  }
}
