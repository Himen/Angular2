import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.svc';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls : ['./app/app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public heroes: Hero[];
    selectedHero: Hero = new Hero();

    ngOnInit() {
      this.getHeroses();
    }

    constructor(private heroService: HeroService) {
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroses(): void {
      // this.heroService.getHeroes().then(h => this.heroes = h);
      // this.heroService.getHeroesSlowly().then(h => this.heroes = h.slice(1, 4));
      // delay(6000);
      this.heroService.getHeroesSlowly().then(h => this.heroes = h);
    }
 }

