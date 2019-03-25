import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  ngDoCheck() {}

  smoothScroll(element) {
    document
      .querySelector(element)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
