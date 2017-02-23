import { Component, OnInit } from '@angular/core';
import Ingredient from '../shared/ingredient';

import { ShoppingListService } from '../../services/shopping-list.service';


@Component({
  moduleId: module.id,
  selector: 'shoppinglist',
  templateUrl: `shopping-list.component.html`,
})
export class ShoppingListComponent implements OnInit {

    ingredients: Array<Ingredient> = [];
    selectedIngredient: Ingredient = null;

    constructor(private _shoppingListService: ShoppingListService) { }

    ngOnInit() {
      this.ingredients = this._shoppingListService.getIngredients();
    }

    onSelectIngredient(ingredient: Ingredient) {
      this.selectedIngredient = ingredient;
    }

    onCleared() {
      this.selectedIngredient = null;
    }
}