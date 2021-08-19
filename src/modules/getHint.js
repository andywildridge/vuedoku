export { getHint };

import { getSingleCandidates } from "./getSingleCandidates.js";
import { findGridSingles } from "./findGridSingles.js";
import { scanCollections } from "./scanCollections.js";
import { findCandidateLines } from "./findCandidateLines.js";
import { findDeletableFromCandidateLines } from "./findDeletableFromCandidateLines.js";
import { findBlocks } from "./findBlocks.js";
import { findDeletableFromBlocks } from "./findDeletableFromBlocks.js";
import gridSingleHint from "./gridSingleHint";
import rcbSingleHint from "./rcbSingleHint";

function getHint(rowColBoxCandidates, gridCandidates, grid) {
  const gridSingles = findGridSingles(gridCandidates.gridCandidates);
  if (gridSingles.length) {
    return gridSingleHint(gridSingles[0], gridCandidates, grid);
  }

  const singles = scanCollections(rowColBoxCandidates, getSingleCandidates);
  if (singles.length) {
    return rcbSingleHint(singles[0], gridCandidates, grid);
  }

  const candy = scanCollections(rowColBoxCandidates, findCandidateLines);
  const deletable = findDeletableFromCandidateLines(candy, gridCandidates);
  if (deletable.length) {
    const { toDelete, type, skewer, number, index } = deletable[0];
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
      ...deletable[0],
      message,
      type: "candidateLine",
      highlights,
    };
  }

  const blocks = findBlocks(rowColBoxCandidates, gridCandidates);
  const deletableFromBlocks = findDeletableFromBlocks(blocks, gridCandidates);
  if (deletableFromBlocks.length) {
    let block = deletableFromBlocks[0];
    const highlights = {};
    let nots = gridCandidates.gridReference({ index: block.blockedIdxs[0] })[
      block.blockType
    ].collection;
    nots.forEach((i) => {
      highlights[i] = "not";
    });
    highlights[block.blockedIdxs[0]] = "target";
    highlights[block.blockedIdxs[1]] = "target";
    let message = `${block.blockNumbers[0]} and ${block.blockNumbers[1]} can only fit in these places in this ${block.blockType}`;
    return {
      ...block,
      type: "blocks",
      message,
      highlights,
    };
  } else {
    return {};
  }
}
