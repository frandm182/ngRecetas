import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import Recipe from '../recipe';
import { RecipeService } from '../../../services/recipe.service'

@Component({
  moduleId: module.id,
  selector: 'recipeEdit',
  templateUrl: `recipe-edit.component.html`,
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  
  recipeForm: FormGroup;
  private recipe: Recipe;
  private recipeIndex: number;
  private isNew: boolean = true;
  private subscription: Subscription;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = +params['id'];
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        console.log(this.isNew);
        this.initForm();
      }
    );
  } 

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  onAddIngredient(name: string, quantity: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        quantity: new FormControl(quantity, [
          Validators.required,
          Validators.pattern("\\d+")
        ])
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let i = 0;i < this.recipe.ingredients.length; i++) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              quantity: new FormControl(this.recipe.ingredients[i].quantity, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          );
        }
      }
      
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
          
    }
    this.recipeForm = new FormGroup({
        name: new FormControl(recipeName, Validators.required),
        imagePath: new FormControl(recipeImageUrl, Validators.required),
        description: new FormControl(recipeContent, Validators.required),
        ingredients: recipeIngredients
      }); 
    
  }


}