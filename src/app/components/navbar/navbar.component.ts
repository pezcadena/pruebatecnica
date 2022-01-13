import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() charactersOut = new EventEmitter<any>();

  constructor(
    private _characterService:CharactersService
  ) { }

  ngOnInit(): void {
  }

  search(event:any){
    console.log("HOLA",event.target.value);
    
    this._characterService.searchNameCharacter(event.target.value).toPromise().then((res:Characters)=>{
      console.log(res);
      this.charactersOut.emit(res);
    });
    
  }

}
