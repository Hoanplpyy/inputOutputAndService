import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.mode';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]  // 只有recipes 會用到，所以放在recipe的父元件
})
export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      data=>{
        this.selectedRecipe=data;
      }
    )
  }
}
