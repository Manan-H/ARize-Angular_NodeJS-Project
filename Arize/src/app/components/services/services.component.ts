import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  main: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMain().subscribe(data => {
      return (this.main = data);
    });
  }
}
