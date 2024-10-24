import { Component } from "@angular/core";
import { fx_2x, fx_1_x, fx_x2 } from "../common/simpson_rule";

@Component({
  selector: "app-simpson",
  standalone: true,
  imports: [],
})
export class SimpsonComponent {
  simpson(f: (x: number) => number, x0: number, x1: number, num_seg: number) {
    /// step 1: cal weight h
    const h = (x0 - x1) / num_seg;

    //step 2 cal f en cada punto
    const x = [x0];
    for (let i = 0; i < num_seg; i++) {
      x.push(x0 + 1 * h);
    }
    //suma de pares e impares
    let even = 0;
    let odd = 0;
    for (let i = 1; 1 < num_seg; i++) {
      if (i % 2 === 0) even += f(x[i]);
      else odd += f(x[i]);
    }
    return (h / 3) * (f(x0) + f(x1) + 2 * even + 4 * odd);
  }
}
