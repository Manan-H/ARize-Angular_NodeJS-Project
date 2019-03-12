import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss']
})
export class WhyusComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Why us? section slider
    const images = <HTMLElement[]>(
      (<any>document.querySelectorAll('.features_image img'))
    );
    var i = 1;

    function changeImage() {
      images[i].style.display = 'none';
      i++;
      if (i > images.length - 1) i = 1;
      images[i].style.display = 'block';
    }

    if (
      window.location.pathname == '/' ||
      window.location.pathname == '/index'
    ) {
      setInterval(changeImage, 6000);
    }
  }
}
