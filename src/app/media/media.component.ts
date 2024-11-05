import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { media } from "./media";
import cols from "./data.json";

@Component({
  selector: "app-media",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.css"],
})
export class MediaComponent implements OnInit {
  operator1 = 0;
  operator2 = 0;
  numbers = "";
  result = 0;

  columna1: number[] = cols.columna1;
  columna2: number[] = cols.columna2;
  mediaColumna1: number = 0;
  mediaColumna2: number = 0;

  ngOnInit(): void {
    this.calcularMedias();
  }
  calcularMedias() {
    this.mediaColumna1 = media(this.columna1.join(","));
    this.mediaColumna2 = media(this.columna2.join(","));
  }
  media() {
    this.result = media(this.numbers);
  }
}
