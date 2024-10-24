import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SimpsonComponent } from "./simpson.component";
import { fx_2x, fx_1_x, fx_x2 } from "../common/simpson_rule";

describe("SimpsonComponent", () => {
  it("Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x", () => {});

  it("Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2", () => {});

  it("Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x", () => {});
});
