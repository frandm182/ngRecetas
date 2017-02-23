"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shopping_list_service_1 = require('../../services/shopping-list.service');
var ingredient_1 = require('../shared/ingredient');
var ShoppingListAddComponent = (function () {
    function ShoppingListAddComponent(sls) {
        this.sls = sls;
        this.cleared = new core_1.EventEmitter();
        this.isAdd = true;
    }
    ShoppingListAddComponent.prototype.ngOnChanges = function (changes) {
        if (changes.ingredient.currentValue === null) {
            this.isAdd = true;
            this.ingredient = new ingredient_1.default(null, null);
        }
        else {
            this.isAdd = false;
        }
    };
    ShoppingListAddComponent.prototype.onSubmit = function (ingredient) {
        var newIngredient = new ingredient_1.default(ingredient.name, ingredient.quantity);
        if (!this.isAdd) {
            this.sls.editIngredient(this.ingredient, newIngredient);
            this.onClear();
        }
        else {
            this.ingredient = newIngredient;
            this.sls.addIngredient(this.ingredient);
        }
    };
    ShoppingListAddComponent.prototype.onDelete = function () {
        this.sls.deleteIngredient(this.ingredient);
        this.onClear();
    };
    ShoppingListAddComponent.prototype.onClear = function () {
        this.isAdd = true;
        this.cleared.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ingredient_1.default)
    ], ShoppingListAddComponent.prototype, "ingredient", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShoppingListAddComponent.prototype, "cleared", void 0);
    ShoppingListAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shoppinglistadd',
            templateUrl: "shopping-list-add.component.html",
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListAddComponent);
    return ShoppingListAddComponent;
}());
exports.ShoppingListAddComponent = ShoppingListAddComponent;
//# sourceMappingURL=shopping-list-add.component.js.map