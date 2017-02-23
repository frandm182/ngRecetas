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
var http_1 = require('@angular/http');
var recipe_1 = require('../componentes/recipes/recipe');
var ingredient_1 = require('../componentes/shared/ingredient');
require('rxjs/Rx');
var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesChanged = new core_1.EventEmitter();
        this.recipes = [
            new recipe_1.default('Schnitzel', "El Wiener Schnitzel (del alemán Wiener Schnitzel: filete al estilo de Viena) o escalope vienés, es uno de los más famosos platos de la cocina austriaca.", "http://oekastatic.orf.at/static/images/site/oeka/20120414/schnitzel1.5051508.jpg", [
                new ingredient_1.default('French Fries', 2),
                new ingredient_1.default('Pork Meat', 1)
            ]),
            new recipe_1.default('Summer Salad', "Fresh, easy, and pretty enough for a party – these colorful chicken salad recipes, potato salad recipes, berry salad recipes", "http://homecaprice.com/wp-content/uploads/2015/05/2-salad1.jpg", [])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.recipes[id];
    };
    RecipeService.prototype.deleteRecipe = function (recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
    };
    RecipeService.prototype.editRecipe = function (oldRecipe, newRecipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    };
    RecipeService.prototype.storeData = function () {
        var body = JSON.stringify(this.recipes);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('https://recipebook-c9e67.firebaseio.com/recipes.json', body, options);
    };
    RecipeService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('https://recipebook-c9e67.firebaseio.com/recipes.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.recipes = data;
            _this.recipesChanged.emit(_this.recipes);
        });
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map