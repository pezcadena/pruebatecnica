import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()character!: Character;

  image="";
  name="";
  status="";
  type="";
  gender="";

  constructor() { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp(){
    this.image = this.character.image;
    this.name = this.character.name;
    this.status = this.character.status;
    this.type = this.character.type;
    this.gender = this.character.gender;
  }

}
