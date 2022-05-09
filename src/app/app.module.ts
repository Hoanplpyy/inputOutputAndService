import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { shoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppingList/shopping-list.service';


@NgModule({
  declarations: [
    AppComponent,
    shoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    DropdownDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
