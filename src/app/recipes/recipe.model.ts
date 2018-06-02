import { Ingredient } from "../shared/ingredient.model";

// Model for recipe in ts
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    public total: string;
    public prep: string;
    public cook: string;
    public output: string;
    public level: string;
    public directions: string;


    public ingredients: Ingredient[];

    constructor(
        name: string,
        desc: string, 
        imagePath: string, 

        total: string,
        prep: string,
        cook: string,
        output: string,
        level: string,
        directions: string,

        ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        
        this.total = total;
        this.prep = prep;
        this.cook = cook;
        this.output = output;
        this.level = level;
        this.directions = directions;

        this.ingredients = ingredients;
    }
}