import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [ {
    id: uuid(),
    name: 'trunks',
    power: 6000
  } ]

  @Output()
  public onDelte: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: string): void {
    //TODO Emitir el ID del Personaje
    this.onDelte.emit(index)
    //console.log(this.characterList)
  }

}
