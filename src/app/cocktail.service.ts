import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './cocktail';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private url = '../assets/data/cocktails.json';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>(this.url);
  }
}
