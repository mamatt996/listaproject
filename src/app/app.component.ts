import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log("Ricetta ricevuta dal nonno", recipe);
    this.selectedRecipe = recipe;
  }

  constructor(private serv: RecipesService) {}

  ngOnInit() {
    this.serv.searchRecipes("butter");
  }
}
