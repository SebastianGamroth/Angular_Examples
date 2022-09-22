import { Component, OnInit } from '@angular/core';
import { DataColorService } from 'src/app/services/data-color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuArray: any = [
    'Input Output',
    'Filter',
    'Reactive Forms',
    'Models',
    'Service',
    'NgForm',
    'Drag & Drop',
    'Firebase',
    '@Input @Output',
    'API Poke',
    'Virtual Scrolling',
    'Track by Function'
  ];

  constructor(public service: DataColorService) { }

  ngOnInit(): void {
  }

  menuTitle(value: any) {
    this.service.menuTitle = this.menuArray[value];
  }

}
