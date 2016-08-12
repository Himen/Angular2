import { Component, OnInit } from '@angular/core';

import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    moduleId: module.id,
    selector: 'secondBagTest',
    templateUrl: 'second-bag.component.html',
    directives: [Dragula],
    viewProviders: [DragulaService]
})
export class SecondBagComponent implements OnInit {
    ngOnInit() { }

copy = (el: Element, source: Element) =>  source === document.getElementById('#left-copy-1tomany');
accepts  = (el: Element, target: Element, source: Element, sibling: Element) =>  target  === document.getElementById('#left-copy-1tomany');

 constructor(private dragulaService: DragulaService) {

    dragulaService.setOptions('fifth-bag', {
      copy: true
    });

    dragulaService.drag.subscribe((value: any) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value: any) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value: any) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value: any) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\s+)' + name + '(?:\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\s+)' + name + '(?:\s+|$)', 'g'), '');
    }
  }

  private onDrag(args: any) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args: any) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args: any) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args: any) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }
}