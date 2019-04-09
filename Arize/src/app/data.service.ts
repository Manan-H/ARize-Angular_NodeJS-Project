import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  // public getMain() {
  //   return this.http.get('http://localhost:3000/');
  // }

  public getMain() {
    return this.http.get('../assets/json/main.json');
  }

  // public getBlogs() {
  //   return this.http.get('http://localhost:3000/blogs');
  // }

  // public getBlogsArticle() {
  //   return this.http.get('http://localhost:3000/blogs/:id');
  // }

  public getBlogs() {
    return this.http.get('../assets/json/blogs.json');
  }
}
