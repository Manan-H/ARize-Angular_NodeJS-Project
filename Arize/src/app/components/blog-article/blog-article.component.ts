import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  blogs: any = [];
  post: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.dataService.getBlogs().subscribe(data => {
      this.blogs = data;

      this.post = this.blogs.filter(post => {
        return post.id === this.id;
      });
      console.log(this.post);
      console.log(this.post[0].content[0].typE);
    });

    let navbar = document.querySelector('.navbar');
    navbar.classList.add('gradient');
  }

  getBackground(color) {
    return color;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let sideSubscribe = document.querySelector('.blog-article-subscribe');
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number < 1700) {
      sideSubscribe.classList.remove('bottom-margin');
    } else {
      sideSubscribe.classList.add('bottom-margin');
    }
  }
}
