export { getHint };

import { getSingleCandidates } from "./getSingleCandidates.js";
import { findGridSingles } from "./findGridSingles.js";
import { scanCollections } from "./scanCollections.js";
import { findCandidateLines } from "./findCandidateLines.js";
import { findDeletableFromCandidateLines } from "./findDeletableFromCandidateLines.js";
import { findBlocks } from "./findBlocks.js";

function getHint(rowColBoxCandidates, gridCandidates) {
  // keepers
  const singles = scanCollections(rowColBoxCandidates, getSingleCandidates);
  const gridSingles = findGridSingles(gridCandidates.gridCandidates);

  // restarters
  const candy = scanCollections(rowColBoxCandidates, findCandidateLines);
  const deletable = findDeletableFromCandidateLines(candy, gridCandidates);
  const blocks = findBlocks(rowColBoxCandidates, gridCandidates);

  console.log(gridSingles, singles, deletable, blocks);

  if (gridSingles.length) {
    return { ...gridSingles[0], type: 'gridSingle' };
  } else if (singles.length) {
    let type = singles[0].result[0].type;
    if (type === "rows") {
      type = "row";
    }
    if (type === "cols") {
      type = "col";
    }
    if (type === "boxes") {
      type = "box";
    }
    return {
      number: singles[0].number,
      index: gridCandidates.gridReference({
        [type]: singles[0].result[0].index,
        index: singles[0].result[0].candidateList,
      }).gridIndex,
      type: 'rcbSingle'
    };
  } else if (deletable.length) {
    return { 
        ...deletable[0], type: 'candidateLine',
    };
  } else {
    return {
      number: undefined,
      index: undefined,
    };
  }
}
