import { expect, test } from "vitest";
import formatNumber from "./formatNumber";

test("format number", () => {
  expect(formatNumber(10)).toBe(10);
  expect(formatNumber(999)).toBe(999);
  expect(formatNumber(1000)).toBe("1.0K+");
  expect(formatNumber(10000)).toBe("10.0K+");
  expect(formatNumber(1000000)).toBe("1.0M+");
  expect(formatNumber(1000000000)).toBe("1.0B+");
  expect(formatNumber(1000000000000)).toBe("1.0T+");
});
