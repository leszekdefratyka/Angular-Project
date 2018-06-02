import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
    
  //inject shopping-list.service
  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

onEditItem(index: number){
  

}

}
