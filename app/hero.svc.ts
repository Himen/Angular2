import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROSES } from './mock-heroses';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROSES);
  }
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROSES), 2000));
  }
  getHero(id: number) {
    return this.getHeroes()
              .then(h => h.find(hero => hero.id === id));
  }
}
