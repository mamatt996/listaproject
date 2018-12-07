import { RecipesService } from "./../../recipes.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  onSelectedList(recipe) {
    console.log("Elemento lista selezionato", recipe);
    this.selectedRecipe.emit(recipe);
  }

  constructor(public recipesService: RecipesService) {
    this.recipes = recipesService.recipes;
  }

  ngOnInit() {}
}
