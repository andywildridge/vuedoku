import { findGridSingles } from "@/modules/findGridSingles";

test("find grid singles", () => {
  const candidates = new Map();
  candidates.set(4, new Set([1]));
  candidates.set(7, new Set([1, 2]));
  candidates.set(17, new Set([5]));
  expect(findGridSingles(candidates)).toEqual([
    {
      number: 1,
      index: 4,
    },
    {
      number: 5,
      index: 17,
    },
  ]);
});
