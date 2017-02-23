import { Component, OnInit } from '@angular/core';
import {  } from '@angular/router';
import Recipe from '../recipe';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'recipe-list',
  templateUrl: `recipe-list.component.html`,
})
export class RecipeListComponent implements OnInit { 
    
    recipes: Array<Recipe> = [];   
    
    constructor(private recipeService: RecipeService) { }

    ngOnInit() { 
      this.recipes = this.recipeService.getRecipes();
      this.recipeService.recipesChanged.subscribe(
        (recipes: Array<Recipe>) => this.recipes = recipes
      );
    }
}