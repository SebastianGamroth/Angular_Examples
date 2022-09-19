import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  inputName: string = '';
  outputName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addInputValue() {
    this.outputName = this.inputName;
    this.inputName = '';
  }

}
