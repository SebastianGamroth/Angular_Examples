import { Component, OnInit } from '@angular/core';
import { DataColorService } from '../services/data-color.service';

@Component({
  selector: 'app-use-service',
  templateUrl: './use-service.component.html',
  styleUrls: ['./use-service.component.scss']
})
export class UseServiceComponent implements OnInit {
  // public service: DataColorService
  constructor(public service: DataColorService) { }

  ngOnInit(): void {

    console.log('oldColors ', this.service.oldColors);
    this.service.oldColors.forEach(element => {
      console.log('oldColors ', element.first);
    });

    console.log('newColors ', this.service.newColors);
    this.service.newColors.forEach(element => {
      console.log('newColors ', element.second);
    });

    this.service.sayAnything('wolf');

    let plus = this.service.calculatePlus(4, 6);
    console.log('calculatePlus ', plus);
  }

}
