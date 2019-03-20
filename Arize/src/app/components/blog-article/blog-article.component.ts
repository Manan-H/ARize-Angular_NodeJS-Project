import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  id: number;
  name: string;
  title: string;
  date: string;
  image: string;
  content: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
      this.title = params['title'];
      this.date = params['date'];
      this.image = params['image'];
      this.content = params['content'];
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let sideSubscribe = document.querySelector('.blog-article-subscribe');
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
