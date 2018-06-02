import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective} from './shared/dropdown.directive';
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    ContactComponent,
    MapComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQ9f_oT1fxxxzVB0aFH8YTpYhnq6K5TcU'
    })
 
  ],
  //ShoppinglistService available for:
  // shopping-list.component & shopping edit.component & recipe
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
