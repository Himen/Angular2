import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.svc';

@Component({
    moduleId: module.id,
    selector: 'my-wiki-smart',
    templateUrl: 'wikipedia-smart.component.html',
    providers: [WikipediaService]
})
export class WikiSmartComponent implements OnInit {
    private searchTermStream = new Subject<string>();

    constructor(private wikipediaService: WikipediaService) { }

    ngOnInit() { }

    search(term: string) {
        this.searchTermStream.next(term);
    }

    public items: Observable<string[]> = this.searchTermStream
                                     .debounceTime(300)
                                     .distinctUntilChanged()
                                     .switchMap((term: string) => this.wikipediaService.search(term));
}