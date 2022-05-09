import { Ingredient } from '../shared/ingredient.model';
import { Component ,OnInit} from "@angular/core";
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector:'app-shoppingList',
  templateUrl:'./shoppingList.component.html',
  styleUrls:['./shoppingList.component.css']

})

export class shoppingListComponent implements OnInit{

  ingredients:Ingredient[];

  constructor(private shoppingListService: ShoppingListService){
  }

  ngOnInit(): void {   this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    )
  }

}
