export { scanCollections }

function scanCollections(rowColBoxCandidates, action){
    /* scan all row/column/box candidate lists
        and return those that pass the action test e.g.
        contains a single value or candidate line pair
    */
    const results = [];
    // iterate through numbers 1 to 9
    rowColBoxCandidates.forEach((collections, number) => {
        const result = eachCollection(collections, action);
        if(result.length){
            results.push({ number, result });
        }
    });
    return results;
}

function eachCollection(collections, action){
    let results = [];
    // iterate through types row, column and box
    collections.forEach((collection, type) => {
        results.push(iterateCollections(collection, type, action));
    });
    return results.flat();
}

function iterateCollections(collection, type, action){
    let results = [];
    // iterate through candiste sets & return those that match the action
    collection.forEach((candidates, index) => {
        let candidateList = action(candidates, type);
        if(candidateList !== false){
            results.push({ index, candidateList, type });
        }
    });
    return results;
}