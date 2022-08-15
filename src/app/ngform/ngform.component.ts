import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.scss']
})
export class NgformComponent implements OnInit {
  giveName: any = '...';

  constructor() { }

  ngOnInit(): void {
  }

  getDate(date: NgForm) {
    this.giveName = date;
    console.log(this.giveName)
  }
}