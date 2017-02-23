import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import Ingredient from '../shared/ingredient';


@Component({
  moduleId: module.id,
  selector: 'shoppinglistadd',
  templateUrl: `shopping-list-add.component.html`,
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() ingredient: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd: boolean = true;
  
  constructor(private sls: ShoppingListService) { }
  
  ngOnChanges(changes: any) {
    if(changes.ingredient.currentValue === null ){
      this.isAdd = true;
      this.ingredient = new Ingredient(null,null);
    } else {
      this.isAdd = false;
    }
  }
  
  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name,ingredient.quantity);
    if(!this.isAdd) {
      this.sls.editIngredient(this.ingredient,newIngredient);
      this.onClear();
    } else {
      this.ingredient = newIngredient;
      this.sls.addIngredient(this.ingredient);
    }
  }

  onDelete() {
    this.sls.deleteIngredient(this.ingredient);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}