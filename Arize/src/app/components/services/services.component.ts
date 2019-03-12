import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getServices().subscribe(data => {
      return (this.services = data);
    });
  }
}
