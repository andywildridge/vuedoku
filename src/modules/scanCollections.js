export { scanCollections }

function scanCollections(rowColBoxCandidates, action){
    const results = [];
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
    collections.forEach((collection, type) => {
        results.push(iterateCollections(collection, type, action));
    });
    return results.flat();
}

function iterateCollections(collection, type, action){
    let results = [];
    collection.forEach((candidates, index) => {
        let candidateList = action(candidates, type);
        if(candidateList){
            results.push({ index, candidateList, type });
        }
    });
    return results;
}