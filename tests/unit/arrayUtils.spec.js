import { unionArrays, intersectSets } from "@/modules/helpers/arrayUtils";

test("union arrays", () => {
  const a = [1, 2, 3];
  const b = [2, 3, 5];
  const c = [2, 8];
  const union = [1, 2, 3, 5, 8];
  expect(unionArrays(a, b, c)).toEqual(union);
});

test("intersect Sets", () => {
  const a = new Set([1, 2, 3]);
  const b = new Set([2, 3, 4]);
  const intersect = [2, 3];
  expect([...intersectSets(a, b)]).toEqual(intersect);
});
