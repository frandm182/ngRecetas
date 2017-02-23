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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./componentes/header/header.component');
var recipes_component_1 = require('./componentes/recipes/recipes.component');
var recipe_start_component_1 = require('./componentes/recipes/recipe-start.component');
var recipe_edit_component_1 = require('./componentes/recipes/recipe-edit/recipe-edit.component');
var index_1 = require('./componentes/recipes/recipe-list/index');
var recipe_detail_component_1 = require('./componentes/recipes/recipe-detail/recipe-detail.component');
var index_2 = require('./componentes/shopping-list/index');
var recipe_service_1 = require('./services/recipe.service');
var shopping_list_service_1 = require('./services/shopping-list.service');
var router_1 = require('@angular/router');
var appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: recipes_component_1.RecipesComponent, children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            { path: 'new', component: recipe_edit_component_1.RecipeEditComponent },
            { path: ':id', component: recipe_detail_component_1.RecipeDetailComponent },
            { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent }
        ] },
    { path: 'shopping-list', component: index_2.ShoppingListComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, recipes_component_1.RecipesComponent, index_1.RecipeItemComponent, index_1.RecipeListComponent, recipe_detail_component_1.RecipeDetailComponent,
                index_2.ShoppingListComponent, index_2.ShoppingListAddComponent, recipe_start_component_1.RecipeStartComponent, recipe_edit_component_1.RecipeEditComponent],
            providers: [recipe_service_1.RecipeService, shopping_list_service_1.ShoppingListService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map