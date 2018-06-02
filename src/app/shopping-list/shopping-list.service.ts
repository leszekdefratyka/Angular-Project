import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppinglistService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    // startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        // new Ingredient('Apples',5),
        // new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice(); //return copty of ingredients
    }

    addIngredient(ingredient: Ingredient){
       this.ingredients.push(ingredient); 
       this.ingredientsChanged.emit(this.ingredients.slice()); 
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }

        //turn an arry of elements into a list of elements.
        // From push we get a single object to the other array
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}