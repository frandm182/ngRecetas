import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './componentes/header/header.component';
import { RecipesComponent }  from './componentes/recipes/recipes.component';
import { RecipeStartComponent }  from './componentes/recipes/recipe-start.component';
import { RecipeEditComponent }  from './componentes/recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent, RecipeListComponent }  from './componentes/recipes/recipe-list/index';
import { RecipeDetailComponent }  from './componentes/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent, ShoppingListAddComponent } from  './componentes/shopping-list/index';

import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';

import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '' , component: RecipeStartComponent },
    { path: 'new' , component: RecipeEditComponent },
    { path: ':id' , component: RecipeDetailComponent },
    { path: ':id/edit' , component: RecipeEditComponent }       
  ]},
  { path: 'shopping-list', component: ShoppingListComponent}  
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, RecipesComponent, RecipeItemComponent, RecipeListComponent, RecipeDetailComponent,
    ShoppingListComponent, ShoppingListAddComponent, RecipeStartComponent, RecipeEditComponent ],
  providers: [ RecipeService, ShoppingListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
