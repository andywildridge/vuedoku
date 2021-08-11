export { getHint }

import { getSingleCandidates } from './getSingleCandidates.js';
import { findGridSingles } from './findGridSingles.js';
import { scanCollections } from "./scanCollections.js";
import { findCandidateLines } from './findCandidateLines.js';
import { findDeletableFromCandidateLines } from './findDeletableFromCandidateLines.js';
import { findBlocks } from './findBlocks.js';

function getHint(rowColBoxCandidates, gridCandidates) {
    const singles = scanCollections(rowColBoxCandidates, getSingleCandidates);
    const gridSingles = findGridSingles(gridCandidates.gridCandidates);
    const candy = scanCollections(rowColBoxCandidates, findCandidateLines);
    const deletable = findDeletableFromCandidateLines(candy, gridCandidates);
    const blocks = findBlocks(rowColBoxCandidates, gridCandidates);
    console.log(gridSingles, singles, candy, deletable, blocks);
    if(gridSingles.length) {
        return gridSingles[0];
    }
    return true;
}



