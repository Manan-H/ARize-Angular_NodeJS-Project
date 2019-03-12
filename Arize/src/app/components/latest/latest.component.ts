import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  latests: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getLatest().subscribe(data => {
      return (this.latests = data);
    });
  }
}
