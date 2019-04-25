import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {
  blogs: any = [];
  post: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log(this);

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.dataService.getBlogs().subscribe(data => {
      this.blogs = data;

      this.post = this.blogs.filter(post => {
        return post.id === this.id;
      });
    });

    console.log(this.post);
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
