import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {
  blogLink: any;
  constructor() {}

  ngOnInit() {
    this.blogLink = window.location.href;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let socialButtons = document.querySelector('.shareButtons');
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number < 1700) {
      socialButtons.classList.remove('bottom-margin');
    } else {
      socialButtons.classList.add('bottom-margin');
    }
  }
}
