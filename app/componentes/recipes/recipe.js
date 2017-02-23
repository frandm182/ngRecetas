"use strict";
var Recipe = (function () {
    function Recipe(_name, _description, _imagePath, _ingredients) {
        this._name = _name;
        this._description = _description;
        this._imagePath = _imagePath;
        this._ingredients = _ingredients;
        this.name = _name;
        this.description = _description;
        this.imagePath = _imagePath;
        this.ingredients = _ingredients;
    }
    return Recipe;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Recipe;
//# sourceMappingURL=recipe.js.map