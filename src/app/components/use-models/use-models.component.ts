import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/models/animals.class';

@Component({
  selector: 'app-use-models',
  templateUrl: './use-models.component.html',
  styleUrls: ['./use-models.component.scss']
})
export class UseModelsComponent implements OnInit {
  animalsModels = new Animals();
  speciesArray: any;

  constructor() { }

  ngOnInit(): void {
    console.log('calculatePlus ', this.animalsModels.calculatePlus(4, 2));

    this.speciesArray = this.animalsModels.species;
    console.log('speciesArray ', this.speciesArray);

  }
}
