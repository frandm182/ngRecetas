import Ingredient from '../shared/ingredient';

export default class Recipe {
    public name: string; 
    public description: string;
    public imagePath: string;
    public ingredients: Array<Ingredient>;

    constructor(private _name:string, private _description: string, private _imagePath: string, private _ingredients: Array<Ingredient>) {
        this.name = _name;
        this.description = _description;
        this.imagePath = _imagePath;
        this.ingredients = _ingredients;
    }
}