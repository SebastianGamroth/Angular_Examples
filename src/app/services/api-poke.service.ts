import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {

  constructor(private http: HttpClient) { }

  getConfigPoke() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }
}
