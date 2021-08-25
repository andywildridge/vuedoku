/* 
  construct hint for eliminating candidates
  due to candidate lines
*/

export default function candidateLineHint(deletable, gridCandidates) {
  console.log(deletable);
  const { toDelete, type, skewer, number, index } = deletable;
  let message = `${number} candidate line can only fit in these places in this ${type} can remove from ${toDelete}`;
  const highlights = {};
  let nots = gridCandidates.gridReference({ [type]: index, index: 0 })[type]
    .collection;
  nots.forEach((i) => {
    highlights[i] = "not";
  });
  toDelete.forEach((i) => {
    highlights[i] = "target";
  });
  skewer.forEach((i) => {
    highlights[i] = "blockingNumber";
  });
  return {
    ...deletable,
    message,
    type: "candidateLine",
    highlights,
  };
}