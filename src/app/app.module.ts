import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    DbzModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
