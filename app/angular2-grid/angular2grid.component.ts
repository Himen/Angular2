import { Component, OnInit } from '@angular/core';
import { NgGrid, NgGridItem, NgGridPlaceholder } from 'angular2-grid';

@Component({
    moduleId: module.id,
    selector: 'angular2grid',
    templateUrl: 'angular2grid.component.html',
    directives: [NgGrid, NgGridItem]
})
export class Angular2GridComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}