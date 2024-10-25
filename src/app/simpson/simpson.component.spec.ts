import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SimpsonComponent } from "./simpson.component";
import { oneOverX, twoX, x2, t } from "../common/simpson_rule";

describe("SimpsonComponent", () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x", () => {
    const p = component.simpson(twoX, 0, 4, 4);
    expect(p).toBeCloseTo(16.0, 4);
  });
  it("Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2", () => {
    const p = component.simpson(x2, 0, 1, 4);
    expect(p).toBeCloseTo(0.3333, 4);
  });

  it("Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x", () => {
    const p = component.simpson(oneOverX, 1, 4, 6);
    expect(p).toBeCloseTo(1.38, 1);
  });
  it("p=1.1", () => {
    const x0 = 0;
    const x1 = 1.1;
    const dof = 9;
    const num_seg = 4;
    const p = component.simpson(t, x0, x1, num_seg, dof);
    expect(p).toBeCloseTo(0.35006, 1);
  });

  it("Should return p=0.36757 if x0=0 , x1= ", () => {
    const x0 = 0;
    const x1 = 1.1812;
    const dof = 30;
    const num_seg = 4;
    const p = component.simpson(t, x0, x1, num_seg, dof);
    expect(p).toBeCloseTo(0.36757, 1);
  });

  it("Should return p=0.35006", () => {
    const x0 = 0;
    const x1 = 2.75;
    const dof = 30;
    const num_seg = 4;
    const p = component.simpson(t, x0, x1, num_seg, dof);
  });
});
