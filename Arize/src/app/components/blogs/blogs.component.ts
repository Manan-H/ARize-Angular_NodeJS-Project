import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBlogs().subscribe(data => {
      return (this.blogs = data);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let sideSubscribe = document.querySelector('.blogs-subscribe');
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number < 2000) {
      sideSubscribe.classList.remove('bottom-margin');
    } else {
      sideSubscribe.classList.add('bottom-margin');
    }
  }
}
