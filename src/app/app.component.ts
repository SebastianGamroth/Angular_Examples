import { Component } from '@angular/core';
import { DataColorService } from './services/data-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-examples';

  constructor(public service: DataColorService) { }
}
