import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.mode"

export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

 // 1. manage the recipes in recipe list

 //把recipe list 的資料庫搬來service中
  private recipes:Recipe[]=[
    new Recipe('A test recipe',
    'This is a simple test',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A test recipe',
    'This is a simple test',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  getRecipes(){
     return this.recipes.slice();
     // ==> slice will simply return a new array which is an exact copy of the one in this file,
     // ==> therefore we won't access the recipes array stored here from outside, we only get a copy
  }
}
