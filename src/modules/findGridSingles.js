export { findGridSingles }

/*
    take Map of grid candidates and return array
    of number/index objects with only one possibility
*/

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