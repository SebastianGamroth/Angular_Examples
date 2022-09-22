import { Component, OnInit } from '@angular/core';
import { DataColorService } from 'src/app/services/data-color.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: DataColorService) { }

  ngOnInit(): void {
  }

}
