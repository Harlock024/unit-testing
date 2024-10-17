import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import cols from "./data.json";

@Component({
  selector: "app-media",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.css"],
})
export class MediaComponent implements OnInit {
  columna1: number[] = cols.columna1;
  columna2: number[] = cols.columna2;
  mediaColumna1: number = 0;
  mediaColumna2: number = 0;

  ngOnInit(): void {
    this.calcularMedias();
  }
  calcularMedias() {
    if (this.columna1.length > 0) {
      const sumaColumna1 = this.columna1.reduce((acc, valor) => acc + valor);
      this.mediaColumna1 = sumaColumna1 / this.columna1.length;
    }

    if (this.columna2.length > 0) {
      const sumaColumna2 = this.columna2.reduce((acc, valor) => acc + valor);
      this.mediaColumna2 = sumaColumna2 / this.columna2.length;
    }
  }
}
