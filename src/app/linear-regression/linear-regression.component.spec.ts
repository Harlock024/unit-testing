import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LinearRegresionComponent } from "./linear-regression.component";
import data_test1 from "../../assets/test1.json";
import data_test2 from "../../assets/test2.json";
import data_test3 from "../../assets/test3.json";
import data_test4 from "../../assets/test4.json";
const x = 386;
describe(" linear regresion test suite using data_test1", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularLinearRegression(
    data_test1.proxy_size,
    data_test1.actual_added,
  );
  it("Should return B0=-22.55 with the dataset is proxy_size: [130, 650, 99, …] and  actual_added: [186, 699, 132, ...]", () => {
    expect(parseFloat(B0.toFixed(2))).toBe(-22.55);
  });
  it("Should return B1=1.7279 with the dataset Data_Test1", () => {
    expect(parseFloat(B1.toFixed(4))).toBe(1.7279);
  });
  it("Should return yk=644.429 with the dataset Data_Test1 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(644.429);
  });
});
describe(" linear regresion test suite using data_test2", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularLinearRegression(
    data_test2.proxySize,
    data_test2.actualDevelop,
  );
  it("Should return B0=-4.039 with the dataset Data_Test2", () => {
    expect(parseFloat(B0.toFixed(3))).toBe(-4.039);
  });
  it("Should return B1=0.1681 with the dataset Data_Test2", () => {
    expect(parseFloat(B1.toFixed(4))).toBe(0.1681);
  });
  it("Should return yk=60.858 with the dataset Data_Test2 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(60.858);
  });
});
describe("Linear regresion test suite using data_test3", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularLinearRegression(
    data_test3.planAdded,
    data_test3.actualAdded,
  );
  it("Should return B0=-23.92 with the dataset Data_Test3", () => {
    expect(parseFloat(B0.toFixed(2))).toBe(-23.92);
  });
  it("Should return B1=1.43097 with the dataset Data_Test3", () => {
    expect(parseFloat(B1.toFixed(5))).toBe(1.43097);
  });
  it("Should return yk=528.429 with the dataset Data_Test3 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(528.429);
  });
});
describe("Linear regresion test suite using data_test4", () => {
  const component = new LinearRegresionComponent();
  const { B0, B1 } = component.calcularLinearRegression(
    data_test4.planAdded,
    data_test4.actualDevelop,
  );
  it("Should return B0=-4.604 with the dataset Data_Test4", () => {
    expect(parseFloat(B0.toFixed(3))).toBe(-4.604);
  });
  it("Should return B1=0.14016 with the dataset Data_Test4", () => {
    expect(parseFloat(B1.toFixed(5))).toBe(0.14016);
  });
  it("Should return yk=49.4994 with the dataset Data_Test4 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(4))).toBe(49.4994);
  });
});
describe("Call to frond method", () => {
  const component = new LinearRegresionComponent();
  it("should to call linearregresion method", () => {
    // Arrange
    let result: { slope: number; intercept: number };
    component.valueX = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
    component.valueY = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";
    // Act
    component.linearRegression();
    result = component.result;
    console.log(result);
    // Assert
    expect(result.slope).toBe(1.727932426206986),
      expect(parseInt(result.intercept.toFixed(3))).toBe(-22);
  });
});
