import { unionArrays } from '@/modules/arrayUtils'

test("union arrays", () => {
    expect(unionArrays([1,2,3],[2,3,5],[2,8])).toEqual([1,2,3,5,8]);
});