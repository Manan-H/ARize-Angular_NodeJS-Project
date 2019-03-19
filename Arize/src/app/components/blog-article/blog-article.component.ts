import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  blogs: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.dataService.getBlogs().subscribe(data => {
      return (this.blogs = data);
    });
  }
}
