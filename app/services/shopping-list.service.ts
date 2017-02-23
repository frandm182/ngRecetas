import { Injectable } from '@angular/core';
import Ingredient from '../componentes/shared/ingredient';


@Injectable() 
export class ShoppingListService {
    
    private ingredients: Array<Ingredient> = [];

    constructor() { }

    getIngredients() {
        return this.ingredients;
    }

    addIngredients(ingredients: Array<Ingredient>) {
        Array.prototype.push.apply(this.ingredients, ingredients);
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    editIngredient(oldIngredient: Ingredient, newIngredient: Ingredient) {
        this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;
    }

    deleteIngredient(ingredient: Ingredient) {
        this.ingredients.splice(this.ingredients.indexOf(ingredient),1);
    }
}