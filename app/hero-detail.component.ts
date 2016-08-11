import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.svc';

import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {

     }

    ngOnInit() {
        this.route.params.forEach((param: Params) => {
            let id = +param['id'];
            this.heroService.getHero(id)
                .then(h => this.hero = h);
        });
    }

    goBack() {
        window.history.back();
    }
}
