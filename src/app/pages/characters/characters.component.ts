import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters!: Characters;
  actualPage = 1;
  pages:number = 10;

  
  p: number = 1;
  collection: any[] = [];


  constructor(
    private _characterService:CharactersService
  ) { }

  ngOnInit(): void {
    this._characterService.getCharacters().toPromise().then((res:Characters)=>{
      console.log(res);
      this.characters=res;
    });
  }

  numArray(): Array<number> {

    let n=10;
    if ((this.characters.info.pages - this.actualPage)<10) {
      n=this.characters.info.pages - this.actualPage +1;
    }

    return Array(n);
  }

  gotoPage(numberPage:number){
    this._characterService.gotoPageCharacters(numberPage).toPromise().then((res:Characters)=>{
      console.log(res);
      this.characters=res;
    });
    this.actualPage = numberPage;
  }

  nextPage(){
    this.actualPage++;
    this._characterService.gotoPageCharacters(this.actualPage).toPromise().then((res:Characters)=>{
      console.log(res);
      this.characters=res;
    });
  }

  previousPage(){
    if (this.actualPage>1) {
      this.actualPage--;
    }
    this._characterService.gotoPageCharacters(this.actualPage).toPromise().then((res:Characters)=>{
      console.log(res);
      this.characters=res;
    });
  }

  firstPage(){
    this.actualPage = 1;
    this._characterService.gotoPageCharacters(this.actualPage).toPromise().then((res:Characters)=>{
      console.log(res);
      this.characters=res;
    });
  }

  lastPage(){
    this.actualPage = this.characters.info.pages;
    this._characterService.gotoPageCharacters(this.actualPage).toPromise().then((res:Characters)=>{
      console.log(res);
      this.characters=res;
    });
  }
  

}
