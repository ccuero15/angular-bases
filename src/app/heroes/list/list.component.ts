import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent {

  public heroNames: string[] = [ 'Hulk', 'IronMan', 'Doctor Strange', 'Black Widow', 'Thor' ]
  public deletedHero?: string
  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
