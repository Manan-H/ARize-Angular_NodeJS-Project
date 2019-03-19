import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getLatest() {
    return this.http.get('../assets/json/latest.json');
  }

  public getServices() {
    return this.http.get('../assets/json/services.json');
  }

  public getPricing() {
    return this.http.get('../assets/json/pricing.json');
  }

  public getBlogs() {
    return this.http.get('../assets/json/blogs.json');
  }
}
