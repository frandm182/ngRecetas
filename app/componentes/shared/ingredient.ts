export default class Ingredient {
    public name: string; 
    public quantity: number;  

    constructor(public _name:string, public _quantity: number) {
        this.name = _name;
        this.quantity = _quantity;       
    }
}