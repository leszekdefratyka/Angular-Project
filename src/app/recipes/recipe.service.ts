import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

//enable injections services
@Injectable()
export class RecipeService{

recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Passionberry Dessert',
            'Passionberry Dessert', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/9/0/bh0204_passionberry1.jpg.rend.hgtvcom.616.462.suffix/1371584130151.jpeg',
            '3 hr',              //total
            '30 min',            //prep
            '30 min',             //cook
            '6 to 8 servings',    //yield
            'Advanced',           //level
            'In a mixing bowl, beat the egg whites and salt with an electric mixer on medium speed until the eggs are frothy. In a small saucepan, combine the sugar and water and cook, stirring frequently, until the mixture reaches 245 degrees F. Do not boil. Increase the speed on the electric mixer to high and gradually add the melted sugar, beating the egg whites until they form stiff peaks. Dissolve the gelatin in 2 tablespoons warm water and mix with the raspberry puree. Gently fold into the egg white mixture. Lastly, fold in the whipped cream. Keep refrigerated while making the Passion Fruit mousse. ',

            [
                new Ingredient('Pound egg whites',1),
                new Ingredient('Teaspoon salt', 1/4),
                new Ingredient('Ounces sugar', 8),
                new Ingredient('Ounce gelatin powder', 1),
                new Ingredient('Ounces raspberry puree', 8),
                new Ingredient('Quart heavy cream, whipped',1 ),
            ]),
            
        new Recipe(
            'Angel Food Cake and Berry Trifle',
            'Angel Food Cake and Berry Trifle', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/19/0/NY1110H_angel-food-cake-and-berry-trifle_s4x3.jpg.rend.hgtvcom.616.462.suffix/1394586149589.jpeg',
            '1 hr 40 min',              //total
            '20 min',            //prep
            '0 min',             //cook
            '8 servings',        //yield
            'Easy',           //level
            'Add the berries to a bowl along with the sugar and orange juice. Let sit at room temperature for 15 to 20 minutes, until juicy. Meanwhile, add the yogurt and honey to a bowl. Stir with a spoon to mix in the honey and smooth out so the mixture will be more spreadable. Cut the angel food cake into large chunks using a serrated knife, and add about one-third of the cake to the bottom of a medium trifle dish. Add a layer of the syrupy berries and then a layer of yogurt, reserving a few spoonfuls of yogurt for the end. Repeat the layers until you have no more remaining ingredients. Finish the top with the few spoonfuls of yogurt in the center and the fresh, whole strawberries. Cover with plastic wrap, and refrigerate until chilled, at least 1 hour and up to overnight.',

            [
                new Ingredient('Cups fresh strawberries',5),
                new Ingredient('Container blueberries', 1/5),
                new Ingredient('Container raspberries', 1/5),
                new Ingredient('Cup granulated sugar', 1/4),
                new Ingredient('Juice orange', 1/2),
                new Ingredient('Cups low-fat 2-percent Greek yogurt',4 ),
                new Ingredient('Cup honey', 1/4),
            ]),

        new Recipe(
            'Lemon Bars',
            'Lemon Bars', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/5/11/0/0105037_Lemon-square_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540891845.jpeg',
            '1 hr 35 min',        //total
            '10 min',             //prep
            '55 min',             //cook
            '40 triangles',        //yield
            'Intermediate',           //level
            'Preheat the oven to 350 degrees F. For the crust, cream the butter and sugar until light in the bowl of an electric mixer fitted with the paddle attachment. Combine the flour and salt and, with the mixer on low, add to the butter until just mixed. Dump the dough onto a well-floured board and gather into a ball. Flatten the dough with floured hands and press it into a 9 by 13 by 2-inch baking sheet, building up a 1/2-inch edge on all sides. Chill. Bake the crust for 15 to 20 minutes, until very lightly browned. Let cool on a wire rack. Leave the oven on. For the filling, whisk together the eggs, sugar, lemon zest, lemon juice, and flour. Pour over the crust and bake for 30 to 35 minutes, until the filling is set. Let cool to room temperature.',

            [
                new Ingredient('Pound unsalted butter',1/2),
                new Ingredient('Cup granulated sugar', 1/2),
                new Ingredient('Cups flour', 2),
                new Ingredient('Teaspoon kosher salt', 1/8),
                new Ingredient('Extra-large eggs ', 6),
                new Ingredient('Cup freshly squeezed lemon juice',1 ),
            ]),

        new Recipe(
            'Chocolate Cream Pie',
            'Chocolate Cream Pie', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/1/FNM_040111-WN-Desserts-009_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539801889.jpeg',
            '10 min',        //total
            '10 min',             //prep
            '0',             //cook
            '4 servings',        //yield
            'Easy',           //level
            'Beat 8 ounces softened cream cheese, 1/2 cup sugar, 1/3 cup cocoa powder, 1/3 cup milk and 1 teaspoon vanilla extract until fluffy. Spread in a chocolate cookie crust. Beat 1 cup heavy cream with 2 tablespoons sugar until soft peaks form, then spread over the cream cheese layer. Top with shaved chocolate.',

            [
                new Ingredient('Pound unsalted butter',1/2),
                new Ingredient('Cup granulated sugar', 1/2),
                new Ingredient('Cups flour', 2),
                new Ingredient('Teaspoon kosher salt', 1/8),
                new Ingredient('Extra-large eggs ', 6),
                new Ingredient('Cup freshly squeezed lemon juice',1 ),
            ]),    
            
        new Recipe(
            'Shortcake',
            'Shortcake', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/6/0/EA1A07_Shortcake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539806522.jpeg',
            '35 min',        //total
            '20 min',             //prep
            '15 min',             //cook
            '8 servings',        //yield
            'Easy',           //level
            'In a large mixing bowl, combine flour, baking powder, salt and sugar. Cut in butter and shortening. Mix in half-and-half. Drop by large spoonfuls onto a baking sheet. Brush with melted butter and sprinkle with sugar. Bake for 15 minutes or until brown. Cool and eat with berries, ice cream and/or whipped cream.',

            [
                new Ingredient('Cups flour',2),
                new Ingredient('Teaspoons baking powder', 1/2),
                new Ingredient('Teaspoon salt', 1),
                new Ingredient('Tablespoon sugar', 1),
                new Ingredient('Tablespoons butter', 2),
                new Ingredient('Ablespoons shortening',2 ),
            ]),      
            
        new Recipe(
            'Angel Food Cake and Berry Trifle',
            'Angel Food Cake and Berry Trifle', 'https://static.gotujmy.pl/ZDJECIE_PRZEPISU_ETAP/przepisy-z-dodatkiem-borowek-amerykanskich-335164.jpg',
            '1 hr 40 min',              //total
            '20 min',            //prep
            '0 min',             //cook
            '8 servings',        //yield
            'Easy',           //level
            'Add the berries to a bowl along with the sugar and orange juice. Let sit at room temperature for 15 to 20 minutes, until juicy. Meanwhile, add the yogurt and honey to a bowl. Stir with a spoon to mix in the honey and smooth out so the mixture will be more spreadable. Cut the angel food cake into large chunks using a serrated knife, and add about one-third of the cake to the bottom of a medium trifle dish. Add a layer of the syrupy berries and then a layer of yogurt, reserving a few spoonfuls of yogurt for the end. Repeat the layers until you have no more remaining ingredients. Finish the top with the few spoonfuls of yogurt in the center and the fresh, whole strawberries. Cover with plastic wrap, and refrigerate until chilled, at least 1 hour and up to overnight.',

            [
                new Ingredient('Cups fresh strawberries',5),
                new Ingredient('Container blueberries', 1/5),
                new Ingredient('Container raspberries', 1/5),
                new Ingredient('Cup granulated sugar', 1/4),
                new Ingredient('Juice orange', 1/2),
                new Ingredient('Cups low-fat 2-percent Greek yogurt',4 ),
                new Ingredient('Cup honey', 1/4),
            ]),     
            
        new Recipe(
            'Passionberry Dessert',
            'Passionberry Dessert', 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1600x1066/gallery-1474822198-how-to-make-pancakes.jpg?resize=3072:*',
            '3 hr',              //total
            '30 min',            //prep
            '30 min',             //cook
            '6 to 8 servings',    //yield
            'Advanced',           //level
            'In a mixing bowl, beat the egg whites and salt with an electric mixer on medium speed until the eggs are frothy. In a small saucepan, combine the sugar and water and cook, stirring frequently, until the mixture reaches 245 degrees F. Do not boil. Increase the speed on the electric mixer to high and gradually add the melted sugar, beating the egg whites until they form stiff peaks. Dissolve the gelatin in 2 tablespoons warm water and mix with the raspberry puree. Gently fold into the egg white mixture. Lastly, fold in the whipped cream. Keep refrigerated while making the Passion Fruit mousse. ',

            [
                new Ingredient('Pound egg whites',1),
                new Ingredient('Teaspoon salt', 1/4),
                new Ingredient('Ounces sugar', 8),
                new Ingredient('Ounce gelatin powder', 1),
                new Ingredient('Ounces raspberry puree', 8),
                new Ingredient('Quart heavy cream, whipped',1 ),
            ]),            
    

      ];
      // injected service
     constructor(private slService: ShoppinglistService) {}

      getRecipes(){
          return this.recipes.slice();
       }

       getRecipe(index: number){
           return this.recipes[index];
       }

       addIngredientsToShoppingList(ingredients: Ingredient[]){
           this.slService.addIngredients(ingredients);
       }
} 