import { expect, test, describe } from "bun:test";
import { makeChange } from "./calculator";

describe("makeChange", () => {
  test("returns an empty list when targetAmount is 0", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}];
    const targetAmount = 0;
    const result = makeChange(coins, targetAmount);
    expect(result).toEqual([]);
  });

  test("returns an empty list when targetAmount is negative", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}];
    const targetAmount = -100;
    const result = makeChange(coins, targetAmount);
    expect(result).toEqual([]);
  });

  test("returns an empty list when targetAmount cannot be reached with the coins given", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}];
    const targetAmount = 100;
    const result = makeChange(coins, targetAmount);
    expect(result).toEqual([]);
  });

  test("returns the correct list of coins that make up the targetAmount", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}];
    const targetAmount = 1000;
    const result = makeChange(coins, targetAmount);
    const expected = [{ value: 200, count: 1, name: 'A'}, { value: 400, count: 2, name: 'B'}];
    expect(result.sort((a, b) => a.name.localeCompare(b.name))).toEqual(expected);
  });

  test("returns the correct list of coins get closest to the targetAmount", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}, { value: 800, count: 8, name: 'C'}];
    const targetAmount = 900;
    const result = makeChange(coins, targetAmount);
    const expected = [{ value: 800, count: 1, name: 'C'}];
    expect(result.sort((a, b) => a.name.localeCompare(b.name))).toEqual(expected);
  });

  test("return the correct list of coins with the least number of objects", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}, { value: 800, count: 8, name: 'C'}];
    const targetAmount = 1000;
    const result = makeChange(coins, targetAmount);
    const expected = [{ value: 200, count: 1, name: 'A'}, { value: 800, count: 1, name: 'C'}];
    expect(result.sort((a, b) => a.name.localeCompare(b.name))).toEqual(expected);
  })

  test("returns the correct list of coins", () => {
    const coins = [{ value: 200, count: 2, name: 'A'}, { value: 400, count: 3, name: 'B'}, { value: 800, count: 8, name: 'C'}];
    const targetAmount = 2010;
    const result = makeChange(coins, targetAmount);
    const expected = [{ value: 400, count: 1, name: 'B'}, { value: 800, count: 2, name: 'C'}];
    expect(result.sort((a, b) => a.name.localeCompare(b.name))).toEqual(expected);
  })

  test("when the targetAmount is requires more coins than available, returns the closest amount of coins without exceeding the availblity of the coins", () => {
    const coins = [{ value: 200, count: 8, name: 'A'}]
    const targetAmount = 2000
    const result = makeChange(coins, targetAmount)
    const expected = [{ value: 200, count: 8, name: 'A'}]
    expect(result).toEqual(expected)
  })
});
