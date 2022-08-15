import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  getform: FormGroup;
  outPut: any = {
    'name': 'name',
    'email': 'email',
    'message': 'message',
  };

  constructor() { }

  ngOnInit(): void {
    this.getform = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  addInputValue() {
    this.outPut = this.getform.value;
    console.log(this.getform.value);
    this.getform.reset();
  }

  get name() {
    return this.getform.get('name');
  }

  get email() {
    return this.getform.get('email');
  }

  // get message() {
  //   return this.getform.get('message');
  // }
}