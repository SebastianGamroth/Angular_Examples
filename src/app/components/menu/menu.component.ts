import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuArray: any = ['Input Output', 'Filter'];

  constructor() { }

  ngOnInit(): void {
  }

  menuTitle(value:any ) {
    console.log(value)
  }

}
