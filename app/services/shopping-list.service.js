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
var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredients = [];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients;
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        Array.prototype.push.apply(this.ingredients, ingredients);
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    ShoppingListService.prototype.editIngredient = function (oldIngredient, newIngredient) {
        this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;
    };
    ShoppingListService.prototype.deleteIngredient = function (ingredient) {
        this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    };
    ShoppingListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map