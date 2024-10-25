import { Component } from "@angular/core";

@Component({
  selector: "app-simpson",
  standalone: true,
  imports: [],
})
export class SimpsonComponent {
  simpson(
    f: (x: number, dof: number) => number,
    x0: number,
    x1: number,
    num_seg: number,
    dof?: number,
  ): number {
    const h = (x1 - x0) / num_seg;

    let sum = f(x0, dof!) + f(x1, dof!);

    for (let i = 1; i < num_seg; i++) {
      const x = x0 + i * h;

      sum += (i % 2 === 0 ? 2 : 4) * f(x, dof!);
    }
    return (h / 3) * sum;
  }
}
