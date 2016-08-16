import { Component, OnInit } from '@angular/core';

import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

import * as _ from 'underscore';

@Component({
    moduleId: module.id,
    selector: 'bethere-grid',
    templateUrl: 'bethere-grid.component.html',
    styleUrls: ['bethere-grid.component.css'],
    directives: [Dragula],
    viewProviders: [DragulaService]
})
export class BeThereGridComponent implements OnInit {
  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array<string> = ['Explore', 'them'];

    constructor(private dragulaService: DragulaService) {
          dragulaService.dropModel.subscribe((value: any) => {
              this.onDropModel(value.slice(1));
            });
            dragulaService.removeModel.subscribe((value: any) => {
              this.onRemoveModel(value.slice(1));
            });
     }

     private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
        let underScoreExample = _.uniqueId();
      }

      private onRemoveModel(args: any) {
        let [el, source] = args;
        // do something else
      }

    ngOnInit() { }
}


