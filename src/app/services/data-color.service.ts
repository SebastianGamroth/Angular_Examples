import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataColorService {

  drawler: boolean = false;

  public oldColors: any[] = [
    {
      'first': ['blue'],
      'second': ['green'],
    },
    {
      'first': 'lila',
      'second': 'red'
    },
  ];

  newColors: { first: string; second: string; }[] = [
    {
      'first': 'blue',
      'second': 'green'
    },
    {
      'first': 'lila',
      'second': 'red'
    },

  ];

  constructor() { }

  sayAnything(name: string) {
    return console.log('hello ', name);
  }

  calculatePlus(a: number, b: number) {
    let x: number = a + b;
    return x;
  }

  drawerMenu() {
    this.drawler = !this.drawler;
    return this.drawler;
  }

}
