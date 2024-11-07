import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { sumX, sumXX, sumY, sumXY } from "../common/calculate";
import { calculateLinearRegression } from "./linear-regresion";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-linear-regression",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./linear-regression.component.html",
})
export class LinearRegresionComponent {
  valueX = "";
  valueY = "";
  xToPredict: number | null = null;
  result: { slope: number; intercept: number } = { slope: 0, intercept: 0 };
  predictedY: number | null = null;
  calcularLinearRegression(
    x: number[],
    y: number[],
  ): { B0: number; B1: number } {
    const n = x.length;
    const xSum = sumX(x);
    const ySum = sumY(y);
    const xySum = sumXY(x, y);
    const xSquareSum = sumXX(x);

    const xMean = xSum / n;
    const yMean = ySum / n;

    const B1 = (xySum - n * xMean * yMean) / (xSquareSum - n * xMean ** 2);
    const B0 = yMean - B1 * xMean;

    return { B0, B1 };
  }

  predict(B0: number, B1: number, x: number): number {
    return B0 + B1 * x;
  }

  linearRegression() {
    const valueX = this.valueX.split(",").map(Number);
    const valueY = this.valueY.split(",").map(Number);
    const { B0, B1 } = this.calcularLinearRegression(valueX, valueY);

    this.result = { slope: B1, intercept: B0 };
    console.log(this.result);
  }
}
