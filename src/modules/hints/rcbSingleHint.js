import typeConvert from "../helpers/typeConvert";
import { sameCol, sameRow, sameBox } from "../helpers/same";

export default function rcbSingleHint(single, gridCandidates, grid) {
  let type = typeConvert(single.result[0].type);
  const index = gridCandidates.gridReference({
    [type]: single.result[0].index,
    index: single.result[0].candidateList,
  }).gridIndex;
  const highlights = { [index]: "target" };
  let nots = gridCandidates.gridReference({ index })[type].collection;
  nots = nots.filter(
    (i) => i !== index && gridCandidates.gridCandidates.get(i)
  );
  nots.forEach((i) => {
    highlights[i] = "not";
    //why nots?
  });
  const number = single.number;
  grid.forEach((i, idx) => {
    if (i === number) {
      if (
        nots.some((j) => {
          return sameRow(idx, j) || sameCol(idx, j) || sameBox(idx, j);
        })
      ) {
        highlights[idx] = "number";
      }
    }
  });
  let message = `${number} can only fit here as its the only place it goes in this ${type}`;

  return {
    number,
    index,
    typeO: type,
    type: "rcbSingle",
    highlights,
    message,
  };
}
