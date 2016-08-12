import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated: boolean = false;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {

     }

    ngOnInit() {
        this.route.params.forEach((param: Params) => {
           if (param['id'] !== undefined) {
               let id = +param['id'];
               this.navigated = true;
               this.heroService.getHero(id)
                   .then(hero => this.hero = hero);
           }else {
               this.navigated = false;
               this.hero = new Hero();
           }
        });
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero;
                this.goBack(hero);
            })
            .catch(error => this.error = error);
    }
}
