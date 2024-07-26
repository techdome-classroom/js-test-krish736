import getTotalIsles from "./program1";
import { equal } from "assert";

describe("Test cases for finding total number of Islands", function () {
  it(`Returns 1 for [["L","L","L","L","W"],["L","L","W","L","W"],["L","L","W","W","W"],["W","W","W","W","W"]]`, function () {
    const result = getTotalIsles([
      ["L", "L", "L", "L", "W"],
      ["L", "L", "W", "L", "W"],
      ["L", "L", "W", "W", "W"],
      ["W", "W", "W", "W", "W"],
    ]);
    equal(result, 1);
  });
  it(`Returns 3 for [["L","L","W","W","W"],["L","L","W","W","W"],["W","W","L","W","W"],["W","W","W","L","L"]]`, function () {
    const result = getTotalIsles([
      ["L", "L", "W", "W", "W"],
      ["L", "L", "W", "W", "W"],
      ["W", "W", "L", "W", "W"],
      ["W", "W", "W", "L", "L"],
    ]);
    equal(result, 3);
  });
  it(`Returns 1 for [["W", "W", "W", "W"], ["W", "L", "L", "W"], ["W", "L", "L", "W"], ["W", "W", "W", "W"]]`, function () {
    const result = getTotalIsles([
      ["W", "W", "W", "W"],
      ["W", "L", "L", "W"],
      ["W", "L", "L", "W"],
      ["W", "W", "W", "W"],
    ]);
    equal(result, 1);
  });
});
