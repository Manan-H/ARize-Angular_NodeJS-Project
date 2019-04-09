import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  main: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMain().subscribe(data => {
      return (this.main = data);
    });
  }
}
