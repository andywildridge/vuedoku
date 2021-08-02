// calc and cache 
const gridIndexUtil = () => {
	//0-8 index of start/floor of row, col box
	const rowFloor = (index) => ~~(index/9);
	const colFloor = (index) => index%9;
	const boxFloor = (index) => (~~(index/27) * 3) + ~~(index%9/3);
	const getBoxPosition = (index) => index%3 + (~~(index%27/9)*3);

	let gridIndexFromBox = (index, position) => {
		let boxRootIndex = ~~(index/3) * 27 + (index%3*3);
		let boxPositionIndex = ~~(position/3) * 9 + (position%3);
		return boxRootIndex + boxPositionIndex;
	}

	let getRowIndex = (floorIndex, i) => i + (floorIndex*9);
	let getColIndex = (floorIndex, i) => (i*9) + floorIndex;

	let getRowIndecies = (floorIndex) => Array.from({length: 9}, (_, i) => getRowIndex(floorIndex, i));
	let getColIndecies = (floorIndex) => Array.from({length: 9}, (_, i) => getColIndex(floorIndex, i));
	let getBoxIndecies = (floorIndex) => Array.from({length: 9}, (_, i) => gridIndexFromBox(floorIndex, i));

	let indexCache = new Map();
	let collectionCache = {
		row: [],
		col: [],
		box: []
	}
	return (params) => {
			// given an index && or box, col or row
			let { box, col, row, index } = params;
			let gridIndex;
			if(typeof box === 'number'){
				gridIndex = gridIndexFromBox(box,index);
			}else if(typeof col === 'number'){
				gridIndex = (index * 9) + col
			}else if(typeof row === 'number'){
				gridIndex = (row * 9) + index
			}else{
				gridIndex = index;
			}
			let indexInfo = indexCache.get(gridIndex);
			//let now = performance.now();
			if(!indexInfo){
				//console.log(gridIndex, 'cacheIndex')
				//calculate and set cache
				let floors = {
					row: rowFloor(gridIndex),
					col: colFloor(gridIndex),
					box: boxFloor(gridIndex)
				}
				if(!collectionCache?.row[floors.row]){
					console.log(gridIndex, 'cacheRow')
					collectionCache.row[floors.row] = getRowIndecies(floors.row);
				}
				if(!collectionCache?.col[floors.col]){
					console.log(gridIndex, 'cacheCol')
					collectionCache.col[floors.col] = getColIndecies(floors.col);
				}
				if(!collectionCache?.box[floors.box]){
					console.log(gridIndex, 'cacheBox')
					collectionCache.box[floors.box] = getBoxIndecies(floors.box);
				}
				indexInfo = {  // replace with map
					gridIndex,
					row: {
						index: floors.row,
						position: floors.col,
						collection: collectionCache.row[floors.row]
					},
					col: {
						index: floors.col,
						position: floors.row,
						collection: collectionCache.col[floors.col]
					},
					box: {
						index: floors.box,
						position: getBoxPosition(gridIndex),
						collection: collectionCache.box[floors.box]
					}
				}
				indexCache.set(gridIndex, indexInfo);
			}
			//console.log('calcDuration: ', performance.now() - now);
			return indexInfo;

	}
}

export { gridIndexUtil };