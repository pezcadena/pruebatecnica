import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters():Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  gotoPageCharacters(numberPage:number):Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character/?page="+numberPage);
  }

  searchNameCharacter(search:string):Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character/?name="+search);
  }
}
