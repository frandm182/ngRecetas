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
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
        this.ingredients = [];
        this.selectedIngredient = null;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.ingredients = this._shoppingListService.getIngredients();
    };
    ShoppingListComponent.prototype.onSelectIngredient = function (ingredient) {
        this.selectedIngredient = ingredient;
    };
    ShoppingListComponent.prototype.onCleared = function () {
        this.selectedIngredient = null;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shoppinglist',
            templateUrl: "shopping-list.component.html",
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map