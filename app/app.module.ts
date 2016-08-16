import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, JsonpModule } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryService } from './inmemory-data.svc';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './my-dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { WikiComponent } from './wikipedia/wikipedia.component';
import { WikiSmartComponent } from './wikipedia/wikipedia-smart.component';

import { DragulaTestComponent } from './dragulatest/dragulatest.component';
import { SecondBagComponent } from './dragulatest/second-bag.component';

import { DnDComponent } from './ng2DnD/ng2DnD.component';

import { BeThereGridComponent } from './bethere-grid/bethere-grid.component';

import { HeroService } from './hero.svc';

import { Angular2GridComponent } from './angular2-grid/angular2grid.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent,
                  WikiComponent, WikiSmartComponent,
                  DragulaTestComponent, SecondBagComponent,
                  DnDComponent,
                  BeThereGridComponent,
                  Angular2GridComponent
   ],
  providers: [
    HeroService ,
    { provide: XHRBackend, useClass: InMemoryBackendService},
    { provide: SEED_DATA, useClass: InMemoryService}
    ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
