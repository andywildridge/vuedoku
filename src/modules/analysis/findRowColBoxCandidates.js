export { findRowColBoxCandidates }

const sudokuVals = [1,2,3,4,5,6,7,8,9];

function findRowColBoxCandidates(analysis) {
    const {gridCandidates, gridReference} = analysis;
    //initial analysis
    //scan each row, col and box and get possible positions of each number
    //initialise maps for row, col, box candidates
    let analysisMap = new Map(sudokuVals.map(i => [i, new Map([
        ['rows', new Map()],
        ['cols', new Map()],
        ['boxes', new Map()]
    ])]));

    function addToCollection(number, type, index, position){
        let possibles = analysisMap.get(number).get(type).get(index) || new Set();
        possibles.add(position);
        analysisMap.get(number)
            .get(type)
            .set(index, possibles);
    }
    //iterate through possible square values and propogate map with row, col & box possibles
    gridCandidates.forEach((possibles, index) => {
        let { row, col, box } = gridReference({index});

        possibles.forEach((number)=>{ // populate analysisMap
            //if possibles so far undefined create new set for values
            addToCollection(number, 'rows', row.index, col.index);
            addToCollection(number, 'cols', col.index, row.index);
            addToCollection(number, 'boxes', box.index, box.position);
        });
    });
    // done! own file

    return analysisMap;
}