export { getHint };

import { getSingleCandidates } from "./getSingleCandidates.js";
import { findGridSingles } from "./findGridSingles.js";
import { scanCollections } from "./scanCollections.js";
import { findCandidateLines } from "./findCandidateLines.js";
import { findDeletableFromCandidateLines } from "./findDeletableFromCandidateLines.js";
import { findBlocks } from "./findBlocks.js";
import { findDeletableFromBlocks } from "./findDeletableFromBlocks.js";
import gridSingleHint from "./hints/gridSingleHint";
import rcbSingleHint from "./rcbSingleHint";
import candidateLineHint from "./candidateLineHint";
import blockingHint from "./blockingHint";

function randomHint(type) {
  return type[Math.floor(Math.random() * type.length)];
}

function getHint(rowColBoxCandidates, gridCandidates, grid) {
  const singles = scanCollections(rowColBoxCandidates, getSingleCandidates);
  if (singles.length) {
    return rcbSingleHint(randomHint(singles), gridCandidates, grid);
  }

  const gridSingles = findGridSingles(gridCandidates.gridCandidates);
  if (gridSingles.length) {
    return gridSingleHint(randomHint(gridSingles), gridCandidates, grid);
  }

  const candidateLines = scanCollections(
    rowColBoxCandidates,
    findCandidateLines
  );
  const deletable = findDeletableFromCandidateLines(
    candidateLines,
    gridCandidates
  );
  if (deletable.length) {
    console.log(deletable);
    return candidateLineHint(deletable[0], gridCandidates);
  }

  const blocks = findBlocks(rowColBoxCandidates, gridCandidates);
  const deletableFromBlocks = findDeletableFromBlocks(blocks, gridCandidates);
  if (deletableFromBlocks.length) {
    return blockingHint(deletableFromBlocks[0], gridCandidates);
  } else {
    return {};
  }
}
