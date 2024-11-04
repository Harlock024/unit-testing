import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SimpsonRule } from "../common/simpson_rule";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-simpson",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./simpson.component.html",
})
export class SimpsonComponent {
  x0: number = 0;
  x1: number = 0;
  numSeg: number = 0;
  error: number = 0;
  result: number | null = null;

  result1: number = 0;
  result2: number = 0;
  result3: number = 0;

  constructor() {
    this.calculateResults();
  }

  calculateResults(): void {
    this.result1 = SimpsonRule.simpson(0, 4, 4, 0.0001, SimpsonRule.fx_2x);
    this.result2 = SimpsonRule.simpson(0, 1, 4, 0.0001, SimpsonRule.fx_x2);
    this.result3 = SimpsonRule.simpson(1, 4, 6, 0.001, SimpsonRule.fx_1_x);
  }

  simpson() {
    this.result = SimpsonRule.simpson(
      this.x0,
      this.x1,
      this.numSeg,
      this.error,
      SimpsonRule.fx_2x,
    );
  }
}
