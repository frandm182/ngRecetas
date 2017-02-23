import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ShoppingListService } from '../../../services/shopping-list.service';
import { RecipeService } from '../../../services/recipe.service';
import Recipe from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'recipe-detail',
  templateUrl: `recipe-detail.component.html`,
})
export class RecipeDetailComponent implements OnInit, OnDestroy { 
    
    selectedRecipe: Recipe;
    private recipeIndex: number;
    private subcription: Subscription;

    constructor(private sls: ShoppingListService, 
                private router: Router, 
                private route: ActivatedRoute,
                private recipesService: RecipeService) { }

    ngOnInit() { 
      this.subcription = this.route.params.subscribe(
        (params: any) => {
          this.recipeIndex = params['id'];
          this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
        }
      );

    }

    onAddToSoppingList() {
      if (this.selectedRecipe) {
        this.sls.addIngredients(this.selectedRecipe.ingredients);
      }
      
    }

    onEdit() {
      this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete() {
      this.recipesService.deleteRecipe(this.selectedRecipe);
      this.router.navigate(['/recipes']);
    }

    ngOnDestroy() {
      this.subcription.unsubscribe();
    }
}