export { getHint };

import { getSingleCandidates } from "./getSingleCandidates.js";
import { findGridSingles } from "./findGridSingles.js";
import { scanCollections } from "./scanCollections.js";
import { findCandidateLines } from "./findCandidateLines.js";
import { findDeletableFromCandidateLines } from "./findDeletableFromCandidateLines.js";
import { findBlocks } from "./findBlocks.js";
import { findDeletableFromBlocks } from "./findDeletableFromBlocks.js";
import typeConvert from "./typeConvert";
import { sameCol, sameRow, sameBox } from './same';

function getHint(rowColBoxCandidates, gridCandidates, grid) {
  // keepers
  console.log("this", rowColBoxCandidates);
  const singles = scanCollections(rowColBoxCandidates, getSingleCandidates);
  const gridSingles = findGridSingles(gridCandidates.gridCandidates);

  // restarters
  const candy = scanCollections(rowColBoxCandidates, findCandidateLines);
  const deletable = findDeletableFromCandidateLines(candy, gridCandidates);
  const blocks = findBlocks(rowColBoxCandidates, gridCandidates);
  const deletableFromBlocks = findDeletableFromBlocks(blocks, gridCandidates);

  console.log(
    gridSingles,
    singles,
    deletable,
    deletableFromBlocks,
    blocks,
    gridCandidates.gridCandidates
  );

  if (gridSingles.length) {
    const index = gridSingles[0].index;
    const highlights = { [index]: "target" }
    gridCandidates.gridReference({ index }).related.forEach(i=>{
      if(grid[i]>0) { highlights[i] = "blockingNumber" }
    });
    let message = `${gridSingles[0].number} can only fit here as all other numbers already appear in the same row, column or box`;
    return { ...gridSingles[0], type: "gridSingle", highlights, message };
  } else if (singles.length) {
    let type = typeConvert(singles[0].result[0].type);
    const index = gridCandidates.gridReference({
        [type]: singles[0].result[0].index,
        index: singles[0].result[0].candidateList,
      }).gridIndex;
    const highlights = { [index]: "target" };
    let nots = gridCandidates.gridReference({ index })[type].collection;
    nots = nots.filter(i=> i !== index && gridCandidates.gridCandidates.get(i));
    nots.forEach(i => {
        highlights[i] = "not";
        //why nots?
    });
    const number = singles[0].number;
    grid.forEach((i, idx) => {
      if(i === number) {
        if(nots.some(j=>{ 
          return sameRow(idx, j) || sameCol(idx, j) || sameBox(idx, j)
        })){
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
  } else if (deletable.length) {
    // console.log(deletable);
    return {
      ...deletable[0],
      type: "candidateLine",
    };
  } else if (deletableFromBlocks.length) {
    return {
      ...deletableFromBlocks[0],
      type: "blocks",
    };
  } else {
    return {};
  }
}
