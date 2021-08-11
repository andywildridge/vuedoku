export { findBlocks }

function findBlocks(rowColBoxCandidates, gridCandidates){
    console.log(gridCandidates);
    const results = [];
    ['rows','cols','boxes'].forEach(type=>{
        for(let i=1; i<=9; i++){
            let r = getRelatedCollections(rowColBoxCandidates, type, i);
            if(r){
                results.push(r);
            }
        }
    });
    return results;
}

function getRelatedCollections(rowColBoxCandidates, type, index){
    const candidates = {};
    let combined = new Set();
    for(let i = 1; i <= 9; i++){
        const candidateList = rowColBoxCandidates.get(i)?.get(type).get(index);
        if(candidateList){
            candidates[i] = [...candidateList];
            combined = new Set([...candidateList, ...combined]);
        }
    }
    //console.log(candidates, combined);
    let pairs = blocks(candidates,2);
    //console.log(type, index, blocks(candidates,2));
    if(pairs.length){
        return { type, index, pairs }
    }
    return false;
}

function grouping(groupSize, range){
    let end = Math.pow(2, range) - Math.pow(2, range - groupSize);
    let start = Math.pow(2, groupSize - 1) + 1;
    let permutations = []
    for(let i = start; i<= end; i++){
        let combination = i.toString(2);
        if(combination.replaceAll('0','').length === groupSize){
            let res = combination.split('').reverse().reduce((arr, i, idx)=>{
                if(i === '1'){ arr.push(idx); }
                return arr;
            },[]);
            permutations.push(res);
        }
    }
    return permutations;
}//memoise

function blocks(collections, groupSize){
    const collectionKeys = Object.keys(collections);
    let allPossibles = collectionKeys.reduce((arr,i)=>{
        return arr.concat(collections[i]);
    },[]);
    let uniquePossibles = [...new Set(allPossibles)].sort();
    console.time('p');
    let permutations = grouping(groupSize, uniquePossibles.length);
    console.timeEnd('p');
    return permutations.reduce((arr,i)=>{
        let permutation = i.map( j => uniquePossibles[j] ); 
        let canContain = collectionKeys.filter(collectionKey=>{
            return collections[collectionKey].every(i => {
                return permutation.includes(i);
            });
        });
        //console.log(permutation, canContain);
        if(canContain.length === groupSize){
            arr.push({
                permutation,
                canContain: canContain.map(i=>parseInt(i,10))
            })
        }
        return arr;
    },[]);
}