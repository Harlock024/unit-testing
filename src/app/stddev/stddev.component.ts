import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import cols from "./data.json";
@Component({
  selector: "app-stddev",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./stddev.component.html",
  styleUrl: "./stddev.component.css",
})
export class StddevComponent implements OnInit {
  columna1: number[] = cols.columna1;
  columna2: number[] = cols.columna2;
  mediaColumna1: number = 0;
  mediaColumna2: number = 0;
  stddevColumna1: number = 0;
  stddevColumna2: number = 0;

  ngOnInit(): void {
    this.calcularMedias();
    this.calcularStddev();
  }
  calcularMedias() {
    if (this.columna1.length > 0) {
      const sumaColumna1 = this.columna1.reduce((acc, valor) => acc + valor, 0);
      this.mediaColumna1 = sumaColumna1 / this.columna1.length;
    }
    if (this.columna2.length > 0) {
      const sumaColumna2 = this.columna2.reduce((acc, valor) => acc + valor, 0);
      this.mediaColumna2 = sumaColumna2 / this.columna2.length;
    }
  }
  calcularStddev() {
    if (this.columna1.length > 0) {
      const sumatoriaColumna1 = this.columna1.reduce((acc, valor) => {
        const diff = valor - this.mediaColumna1;
        return acc + diff ** 2;
      }, 0);

      this.stddevColumna1 = Math.sqrt(
        sumatoriaColumna1 / (this.columna1.length - 1),
      );
      this.stddevColumna1 = this.redondearNumero(this.stddevColumna1, 2);
    }

    if (this.columna2.length > 0) {
      const sumatoriaColumna2 = this.columna2.reduce((acc, valor) => {
        const diff = valor - this.mediaColumna2;
        return acc + diff ** 2;
      }, 0);

      this.stddevColumna2 = Math.sqrt(
        sumatoriaColumna2 / (this.columna2.length - 1),
      );
      this.stddevColumna2 = this.redondearNumero(this.stddevColumna2, 2);
    }
  }

  redondearNumero(num: number, decimales: number): number {
    const factor = Math.pow(10, decimales);
    return Math.round(num * factor) / factor;
  }
}
