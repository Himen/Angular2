import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.svc';
import { Hero } from './hero';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/heroes.component.html',
    styleUrls : ['./app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    selectedHero: Hero;
    addingHero: boolean = false;
    error: any;

    ngOnInit() {
      this.getHeroses();
    }

    constructor(private heroService: HeroService, private router: Router) {
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroses(): void {
      // this.heroService.getHeroes().then(h => this.heroes = h);
      // this.heroService.getHeroesSlowly().then(h => this.heroes = h.slice(1, 4));
      // delay(6000);
      this.heroService.getHeroes()
                      .then(h => this.heroes = h)
                      .catch(error => this.error = error);
    }

    goToDetails(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }

    addHero(): void {
      this.addingHero = true;
      this.selectedHero = null;
    }

    close(savedHero: Hero): void {
      this.addingHero = false;
      if (savedHero) {
        this.getHeroses();
      }
    }

    deleteHero(hero: Hero, event: any): void{
      event.stopPropagation();
      this.heroService.delete(hero)
                      .then(res => {
                        this.heroes = this.heroes.filter(h => h !== hero);
                        if (this.selectedHero === hero) {
                          this.selectedHero = null;
                        }
                      })
                      .catch(error => this.error = error);
    }
 }

