import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryService } from './inmemory-data.svc';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './my-dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.svc';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent ],
  providers: [
    HeroService ,
    { provide: XHRBackend, useClass: InMemoryBackendService},
    { provide: SEED_DATA, useClass: InMemoryService}
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
