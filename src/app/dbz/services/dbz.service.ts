import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public character: Character[] = [ {
    name: 'Kriln',
    power: 3000
  },
  {
    name: 'Goku',
    power: 10000
  }, {
    name:'Veguetta',
    power:7000
  }
  ];

  onNewCharacter(newCharacter:Character):void{
    this.character.push(newCharacter)
  }

  onDeleteCharacter(id:number):void{
    console.log(id)
    this.character.splice(id,1)
  }
}
