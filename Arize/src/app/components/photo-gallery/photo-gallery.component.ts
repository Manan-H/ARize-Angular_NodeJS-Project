import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    let navbar = document.querySelector('.navbar');
    navbar.classList.add('gradient');
  }
}