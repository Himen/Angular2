import { Component, OnInit } from '@angular/core';
import { DND_PROVIDERS, DND_DIRECTIVES } from 'ng2-dnd/ng2-dnd';

@Component({
    moduleId: module.id,
    selector: 'ng2DnD',
    templateUrl: 'ng2DnD.component.html',
    directives: [DND_DIRECTIVES],
    providers: [DND_PROVIDERS]
})
export class DnDComponent implements OnInit {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

    listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta',
     'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
    listTeamTwo: Array<string> = [];

    constructor() {
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }

    ngOnInit() {

    }

    orderedProduct(orderedProduct: Product) {
        orderedProduct.quantity--;
    }

    addToBasket(newProduct: Product) {
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }

}

class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
}

