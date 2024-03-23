import { merge } from "./merge";

describe("merge", () => {
  it("CASE 1: normal", () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [10, 8, 6, 4, 2];
    const collection3 = [0, 2, 4, 6, 8];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10]);
  });
  it("CASE 2: normal but all elements are the same", () => {
    const collection1 = [1, 2, 3, 4, 5];
    const collection2 = [5, 4, 3, 2, 1];
    const collection3 = [1, 2, 3, 4, 5];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
  });
  it("CASE 3: lengths are not the same", () => {
    const collection1 = [1, 3];
    const collection2 = [10, 8, 6, 4, 2];
    const collection3 = [0];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([0, 1, 2, 3, 4, 6, 8, 10]);
  });
  it("CASE 4: 1 empty length", () => {
    const collection1 = [];
    const collection2 = [2, 1];
    const collection3 = [0];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([0, 1, 2]);
  });
  it("CASE 5: all array is empty", () => {
    const collection1 = [];
    const collection2 = [];
    const collection3 = [];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([]);
  });
});
