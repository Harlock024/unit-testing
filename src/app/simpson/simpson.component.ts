import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SimpsonRule } from "../common/simpson_rule";

@Component({
  selector: "app-simpson",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./simpson.component.html",
})
export class SimpsonComponent {
  x0: number | null = null;
  x1: number | null = null;
  numSeg: number | null = null;
  error: number | null = null;
  dof: number | null = null;
  result: number | null = null;
  selectedFunction: string = "fx_2x";

  calcular() {
    const func = this.getFunction(this.selectedFunction);
    this.result = SimpsonRule.simpson(
      this.x0 ? this.x0 : 0,
      this.x1 ? this.x1 : 0,
      this.numSeg ? this.numSeg : 0,
      this.error ? this.error : 0,
      func,
    );
    console.log(this.result);
  }

  private getFunction(name: string): (x: number) => number {
    switch (name) {
      case "fx_2x":
        return SimpsonRule.fx_2x;
      case "fx_x2":
        return SimpsonRule.fx_x2;
      case "fx_1_x":
        return SimpsonRule.fx_1_x;
      case "TStudent":
        return (x) =>
          SimpsonRule.TStudent(this.x1!, this.numSeg!, this.dof!, this.error!);
      default:
        throw new Error("Función no válida");
    }
  }
}
