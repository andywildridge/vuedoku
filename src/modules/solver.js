import { findGridCandidates } from './findGridCandidates'
import { findRowColBoxCandidates } from "./findRowColBoxCandidates";

const solver = (grid) => {
    console.log(grid);
	let gridCandidates = findGridCandidates(grid);
    console.log('solver', gridCandidates);
    let rowColBoxCandidates = findRowColBoxCandidates(gridCandidates);
    console.log("solver", rowColBoxCandidates);
    return true;
}

export default solver;