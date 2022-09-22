import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackbyfn',
  templateUrl: './trackbyfn.component.html',
  styleUrls: ['./trackbyfn.component.scss']
})
export class TrackbyfnComponent implements OnInit {

  public items: any[] = [
    { id: 0, name: 'Apfel' },
    { id: 1, name: 'Mango' },
    { id: 2, name: 'Birne' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public addSomething(): void {
    this.items = [
      { id: 0, name: 'Apfel' },
      { id: 1, name: 'Mango' },
      { id: 2, name: 'Birne' },
      { id: 3, name: 'Kiwi' },
      { id: 4, name: 'Mandarine' },
      { id: 5, name: 'Banane' }
    ];
  }

  trackByFn(item) {
    return item.id;
  }

}
