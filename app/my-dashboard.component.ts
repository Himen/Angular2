import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.svc';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'my-dashboard.component.html',
    styleUrls: ['my-dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router ) { }

    ngOnInit() {
        this.heroService.getHeroes().then(h => this.heroes = h.slice(1, 5));
     }

    goToDetail(hero: Hero): void {
        let link = ['detail', hero.id];
        this.router.navigate(link);
    }
}
