import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {
  @Input() isLiked = false;

  clickedLike(ev: MouseEvent, numero) {
    console.warn("cliccato like", this.isLiked);
    this.isLiked = !this.isLiked;

    console.log("Dopo click", this.isLiked);
    ev.preventDefault();
  }

  constructor() {}

  ngOnInit() {}
}
