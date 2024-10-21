import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CorrelationComponent } from "./correlation.component";
import data_test1 from "../../assets/test1.json";
import data_test2 from "../../assets/test2.json";
import data_test3 from "../../assets/test3.json";
import data_test4 from "../../assets/test4.json";

describe("CorrelationComponent data_test1", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test1.proxy_size,
    data_test1.actual_added,
  );
  it("Should return r=0.9545 with the dataset Data_Test1", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9545);
  });
  it("Should return rr=0.9111 with the dataset Data_Test1", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.9111);
  });
});
describe("CorrelationComponent data_test2", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test2.proxySize,
    data_test2.actualDevelop,
  );
  it("Should return r=0.9333 with the dataset Data_Test2", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9333);
  });
  it("Should return rr=0.8711 with the dataset Data_Test2", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.8711);
  });
});

describe("CorrelationComponent data_test3", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test3.planAdded,
    data_test3.actualAdded,
  );
  it("Should return r=0.9631 with the dataset Data_Test3", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9631);
  });
  it("Should return rr=0.8711 with the dataset Data_Test3", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.9276);
  });
});

describe("CorrelationComponent data_test4", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    data_test4.planAdded,
    data_test4.actualDevelop,
  );
  it("Should return r=0.9480 with the dataset Data_Test4", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.948);
  });
  it("Should return rr=0.8711 with the dataset Data_Test3", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.8988);
  });
});
