import { 
   Component,
   OnInit
   } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
  }
 
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
      }


}