import { Recipe } from "./../recipe-list/recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  @Input() currentRicetta: Recipe = null;

  constructor() {}

  ngOnInit() {}
}