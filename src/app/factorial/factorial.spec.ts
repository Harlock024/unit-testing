import { factorial } from "./factorial";

describe("factorial test suite", () => {
  it("Should return the factorial of n", () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });
});
