import { Component, OnInit } from '@angular/core';

import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    moduleId: module.id,
    selector: 'dragulatest',
    templateUrl: 'dragulatest.component.html',
    styleUrls: ['dragulatest.component.css'],
    directives: [Dragula],
    viewProviders: [DragulaService]
})
export class DragulaTestComponent implements OnInit {
    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('third-bag', {
      removeOnSpill: true
    });
     }

    ngOnInit() { }

}
