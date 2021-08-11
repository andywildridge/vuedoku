import { findGridCandidates } from './findGridCandidates'
import { findRowColBoxCandidates } from "./findRowColBoxCandidates";
import { getHint } from "./getHint.js";

const solver = (grid) => {
    console.log(grid);
	let gridCandidates = findGridCandidates(grid);
    console.log('solver', gridCandidates);
    let rowColBoxCandidates = findRowColBoxCandidates(gridCandidates);

    let hint = getHint(rowColBoxCandidates, gridCandidates);

    console.log(hint);
    // find good way to get match!

    /* gridCandidates.gridCandidates.forEach((val, key) => {
        if(val.size === 1 && !hint){
           hint = { key, val: [...val][0], info: 'grid single' }
        }
    }); 
    if(!hint) {
        console.log("get rcb")
    }
        
    console.log("solver", hint );*/
    return {
        gridCandidates: gridCandidates.gridCandidates,
        hint,
    }
}

export default solver;