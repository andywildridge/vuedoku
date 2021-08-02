export { findGridSingles }

function findGridSingles(gridCandidates){
    let singles = [];
    gridCandidates.forEach((candidates, index) => {
        if(candidates.size === 1){
            let number = [...candidates][0];
            singles.push({number,index});
        }     
    });
    return singles;
}