import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  collectionJSON: any = [
    {
      'group': 'fruit',
      'name': 'Apple'
    },
    {
      'group': 'fruit',
      'name': 'Banana'
    },
    {
      'group': 'vegetables',
      'name': 'Carrot'
    },
    {
      'group': 'vegetables',
      'name': 'Potato'
    }
  ];
  filterArray: any;

  constructor() { }

  ngOnInit(): void {
    this.filterArray = this.collectionJSON;
  }

  changeFilter(value: string) {
    let selection = this.collectionJSON.filter(t => t['group'] == value);
    this.filterArray = selection;
    if (value == 'all') {
      this.filterArray = this.collectionJSON;
    }
    console.log(this.filterArray)
  }

}
