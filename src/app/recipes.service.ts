import { Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  URL = "http://www.recipepuppy.com/api/?q=cake";

  public recipes: Recipe[] = [
    new Recipe(
      "Rigatoni all'amatriciana",
      "Lorem ipsum dsa dsa",
      "https://cdn.cook.stbm.it/thumbnails/ricette/142/142656/hd750x421.jpg"
    ),
    new Recipe(
      "Rigatoni alla carbonara",
      "Lorem ipsum dsa dsa",
      "http://www.lazanzararoma.com/wp-content/uploads/2015/01/ricetta-della-carbonara-zanzara-prati.jpg"
    ),
    new Recipe(
      "Spacghetti cacio e pepe",
      "Lorem ipsum dsa dsa",
      "https://ips.plug.it/cips/buonissimo.org/cms/2012/04/spaghetti-cacio-e-pepe.jpg"
    )
  ];

  selectedRecipe: Recipe = null;

  changeSelectedRecipe(ricetta: Recipe) {
    console.log("changeSelectedRecipe", ricetta);
    this.selectedRecipe = ricetta;
  }

  constructor() {}
}
