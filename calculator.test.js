import { expect, test, describe } from "bun:test";
import { makeChange } from "./calculator";


describe("makeChange", () => {
  test("returns an empty list when targetAmount is 0", () => {
    const coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}];
    const targetAmount = 0;
    const result = makeChange(coins, targetAmount);
    expect(result).toEqual([]);
  });

  test("returns an empty list when targetAmount is negative", () => {
    const coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}];
    const targetAmount = -100;
    const result = makeChange(coins, targetAmount);
    expect(result).toEqual([]);
  });

  test("returns an empty list when targetAmount cannot be reached with the coins given", () => {
    const coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}];
    const targetAmount = 100;
    const result = makeChange(coins, targetAmount);
    expect(result).toEqual([]);
  });

  test("returns the correct list of coins that make up the targetAmount", () => {
    const coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}];
    const targetAmount = 1000;
    const result = makeChange(coins, targetAmount);
    const expected = [{ value: 400, count: 2, name: 'Large Soul of a Lost Undead'}, { value: 200, count: 1, name: 'Soul of a Lost Undead'}];
    expect(result).toEqual(expected);
  });

  test("returns the correct list of coins that make up the targetAmount with the least over shoot", () => {
    const coins = [{ value: 200, count: 2, name: 'Soul of a Lost Undead'}, { value: 400, count: 3, name: 'Large Soul of a Lost Undead'}, { value: 800, count: 8, name: 'Soul of a Nameless Soldier'}];
    const targetAmount = 900;
    const result = makeChange(coins, targetAmount);
    const expected = [{ value: 800, count: 1, name: 'Soul of a Nameless Soldier'}, { value: 200, count: 1, name: 'Soul of a Lost Undead'}];
    expect(result).toEqual(expected);
  });

});
