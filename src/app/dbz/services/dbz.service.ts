import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'


import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [ {
    id: uuid(),
    name: 'Kriln',
    power: 3000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 10000
  }, {
    id: uuid(),
    name: 'Veguetta',
    power: 7000
  }
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }
    console.log(newCharacter)
    this.characters.push(newCharacter)
  }
  deleteCharacterById(id: string) {
   this.characters = this.characters.filter(character => character.id !== id )
  }
  /* onDeleteCharacter(id: number): void {
    console.log(id)
    this.character.splice(id, 1)
  } */
}
