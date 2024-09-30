import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter {{couter}}</h3>
  <button (click)="increaseBy(1)" type="btn ">+</button>
  <button (click)="decreaseBy(1)" type="btn ">-</button>
  <button (click)="reset()" type="btn ">Reset</button>
  `
})

export class CouterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public couter:number = 10

  increaseBy( value:number ):void{
    this.couter+=value
  }
  decreaseBy(value:number):void{
    this.couter-=value
  }
  reset():void{
    this.couter = 10
  }
}
