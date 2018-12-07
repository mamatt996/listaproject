import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  recipes: Recipe[] = [];

  newRecipes = new EventEmitter<Recipe[]>();
  selectedRecipe: Recipe = null;

  changeSelectedRecipe(ricetta: Recipe) {
    console.log("changeSelectedRecipe", ricetta);
    this.selectedRecipe = ricetta;
  }

  constructor(private http: HttpClient) {}

  searchRecipes(searchTerm: string = "cake") {
    const url_composta = this.URL + searchTerm;
    const response = this.http
      .get(url_composta)
      .toPromise()
      .then((resp: { meals: [] }) => {
        console.log("Ricette ricevute", resp);
        this.recipes = resp.meals.map(function(meal: any) {
          console.log(meal);
          const myRecipe = new Recipe(
            meal.strMeal,
            meal.strInstructions,
            meal.strMealThumb
          );
          return myRecipe;
        });
        console.log("this.recipes.ripulite", this.recipes);
        this.newRecipes.emit(this.recipes);
      })
      .catch(err => {
        console.error("ERRORE!!!", err);
      });
  }
}
