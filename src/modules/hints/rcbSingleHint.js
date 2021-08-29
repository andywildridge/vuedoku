import typeConvert from "../helpers/typeConvert";
import { sameCol, sameRow, sameBox } from "../helpers/same";

export default function rcbSingleHint(single, gridCandidates, grid) {
  console.log(single);
  let type = typeConvert(single.result[0].type);
  let typeIndex = single.result[0].index;
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
  let message = `There is only one remaining position in <span class="not">${type === "col" ? "column" : type} ${typeIndex +
    1}</span> that <span class="target">number ${number}</span> can be placed`;

  return {
    number,
    index,
    typeIndex,
    typeO: type,
    type: "rcbSingle",
    highlights,
    message,
  };
}
