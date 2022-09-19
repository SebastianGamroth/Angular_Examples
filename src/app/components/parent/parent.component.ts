import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  currentItem = 'Television'; // input
  items = ['item1', 'item2', 'item3', 'item4']; // output

  constructor() { }

  ngOnInit(): void {
  }

  // input
  addInputValue() {
    this.currentItem = 'Television';
  }

  // output
  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
