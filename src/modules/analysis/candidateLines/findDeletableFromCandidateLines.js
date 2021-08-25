export { findDeletableFromCandidateLines }

function findDeletableFromCandidateLines(candy, gridCandidates){
    let results = []
    candy.forEach(i => {
        i.result.forEach(candidateLine=>{
            //console.log(i.number,candidateLine);
            let type = candidateLine.type;
            let type2;
            if(type === 'boxes'){ 
                type = 'box';
            }
            if(type === 'cols'){ type = 'col'; type2 = 'col'}
            if(type === 'rows'){ type = 'row'; type2 = 'row'}
            let blocked = gridCandidates.gridReference({[type]: candidateLine.index, index: candidateLine.candidateList[0]});
            if(type === 'box'){ 
                if(candidateLine.candidateList[0]%3 === candidateLine.candidateList[1]%3){
                    type2 = 'col';
                }else{
                    type2 = 'row';
                } 
            }
            let set = new Set([...blocked[type2].collection, ...blocked.box.collection]);
            let skewer = candidateLine.candidateList.map(index=>{
                return gridCandidates.gridReference({[type]: candidateLine.index, index}).gridIndex;
            });
            skewer.forEach(gridIndex=>{
                set.delete(gridIndex);
            });
            //console.log(set);
            let toDelete = [...set].filter(idx=>{
                //console.log(gridCandidates.gridCandidates.get(idx))
                return gridCandidates.gridCandidates.get(idx)?.has(i.number);
            });
            if(toDelete.length){             
                results.push({
                    number: i.number,
                    toDelete,
                    type,
                    index: candidateLine.index,
                    candidates: candidateLine.candidateList,
                    skewer
                    })
            }
        });
        
    });
    return results;
}