export { findGridCandidates };

//import { indexMap as gridIndexReference } from './indexMap.js';
import { gridIndexUtil as gridIndexReference } from '../helpers/gridIndex.js';
import { removeArrayElements } from '../helpers/arrayUtils.js';

const sudokuVals = [1,2,3,4,5,6,7,8,9];

function findSquareCandidates(idx, grid, gridIndexReference){
	let indexInfo = gridIndexReference({index: idx});//rename vars
	let rowVals = indexInfo.row.collection.map((i)=>grid[i]);
	let colVals = indexInfo.col.collection.map((i)=>grid[i]);
	let boxVals = indexInfo.box.collection.map((i)=>grid[i]);
	let nonCandidates = [...new Set([...rowVals, ...colVals, ...boxVals])];
	return removeArrayElements({ baseArray: sudokuVals, elementsToRemove: nonCandidates });
}

function findGridCandidates(grid) {
	// create a candidateMap where keys = empty square index and value = set of candidates 
	// return with populated indexInfo object
	const gridReference = gridIndexReference();
	const gridCandidates = grid.reduce((candidateMap, squareValue, idx)=>{
		if(!squareValue){
			candidateMap.set(idx, 
				new Set(findSquareCandidates(idx,
					grid,
					gridReference)))
		}
		return candidateMap;
	}, new Map());

	return {
		gridCandidates,
		gridReference
	}
}