import { RecipesService } from "./../../recipes.service";
import { Recipe } from "./../recipe-list/recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  @Input() currentRicetta: Recipe = null;

  constructor(private service: RecipesService) {}

  ngOnInit() {
    this.service.recipeChanged.subscribe(
      newRecipe => {
        this.currentRicetta = newRecipe;
      },
      error => console.error(error)
    );
  }
}
