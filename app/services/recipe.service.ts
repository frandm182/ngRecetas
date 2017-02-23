import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import Recipe from '../componentes/recipes/recipe';
import Ingredient from '../componentes/shared/ingredient';
import 'rxjs/Rx';

@Injectable() 
export class RecipeService {
    recipesChanged = new EventEmitter<Array<Recipe>>();

    private recipes: Array<Recipe> = [
      new Recipe('Schnitzel',"El Wiener Schnitzel (del alemán Wiener Schnitzel: filete al estilo de Viena) o escalope vienés, es uno de los más famosos platos de la cocina austriaca.","http://oekastatic.orf.at/static/images/site/oeka/20120414/schnitzel1.5051508.jpg",[
          new Ingredient('French Fries', 2),
          new Ingredient('Pork Meat', 1)
      ]),
      new Recipe('Summer Salad',"Fresh, easy, and pretty enough for a party – these colorful chicken salad recipes, potato salad recipes, berry salad recipes","http://homecaprice.com/wp-content/uploads/2015/05/2-salad1.jpg",[])
    ];

    constructor(private http: Http) { }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData() {
        const body = JSON.stringify(this.recipes);
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('https://recipebook-c9e67.firebaseio.com/recipes.json', body, options);
    }

    fetchData() {
        return this.http.get('https://recipebook-c9e67.firebaseio.com/recipes.json')
            .map((response: Response) => response.json())
            .subscribe(
                (data: Array<Recipe>) => {
                    this.recipes = data;
                    this.recipesChanged.emit(this.recipes);
                }
            );
    }
}