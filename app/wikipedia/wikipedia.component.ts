import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.svc';

@Component({
    moduleId: module.id,
    selector: 'my-wiki',
    templateUrl: 'wikipedia.component.html',
    providers: [WikipediaService]
})
export class WikiComponent implements OnInit {
    items: Observable<string[]>;
    constructor(private wikipediaService: WikipediaService) { }

    ngOnInit() { }

    search(term: string) {
        this.items = this.wikipediaService.search(term);
    }
}