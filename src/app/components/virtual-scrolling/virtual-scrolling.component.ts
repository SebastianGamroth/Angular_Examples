import { Component } from '@angular/core';
// import * as faker from 'faker';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingComponent {

  public fakeData: Observable<Person[]> = this._generatePersonData(30);

  private _generatePersonData(count: number): Observable<Person[]> {
    const array: Person[] = [];
    for (let i = 0; i < count; i++) {
      array.push({
        name: faker.internet.userName()
      })
    }
    return of(array);
  }

}

interface Person {
  name: string;
}