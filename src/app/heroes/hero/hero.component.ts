import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.css' ]
})
export class HeroComponent {
  public name: string = 'ironMan'
  public age: number = 23

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Hulk'
  }

  changeAge():void{
    this.age = 31

  }
}
