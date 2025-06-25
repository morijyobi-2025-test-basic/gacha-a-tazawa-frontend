import { describe, expect, it } from "vitest";
import resultColor from "../../src/libs/resultColor";

describe("resultColor", () => {
  it ("Sの場合は#ff0000を返す", () => {
    expect(resultColor("S")).toBe("#ff0000");
  });
  it ("Aの場合は#0000ffを返す", () => {
    expect(resultColor("A")).toBe("#0000ff");
  });
  it ("Bの場合は#00ff00を返す", () => {
    expect(resultColor("B")).toBe("#00ff00");
  });
  it ("Cの場合は#666666を返す", () => {
    expect(resultColor("C")).toBe("#666666");
  });
  it ("それ以外の場合は#000000を返す", () => {
    expect(resultColor("X")).toBe("#000000");
  });
});
