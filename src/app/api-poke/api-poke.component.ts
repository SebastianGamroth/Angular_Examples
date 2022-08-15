import { Component, OnInit } from '@angular/core';
import { ApiPokeService } from '../services/api-poke.service';

@Component({
  selector: 'app-api-poke',
  templateUrl: './api-poke.component.html',
  styleUrls: ['./api-poke.component.scss']
})
export class ApiPokeComponent implements OnInit {
  pokemon: any[] = [];

  constructor(public service: ApiPokeService) { }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.service.getConfigPoke().subscribe((api: any) => {
      console.log(api);
      this.pokemon.push(api);
      console.log(this.pokemon);

      // api.results.forEach(element => {
      //   console.log(element.name);
      // });

      // this.pokemon[0].results.forEach(element => {
      //   console.log(element.name);
      // });

      api.results.forEach(element => {
        this.pokemon.push(element.name);
      });
    })
  }

}
