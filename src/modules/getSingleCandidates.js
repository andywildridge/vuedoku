export { getSingleCandidates }

function getSingleCandidates(candidates) {
    if(candidates.size === 1){
        return [...candidates][0];
    }
    return false;
}
