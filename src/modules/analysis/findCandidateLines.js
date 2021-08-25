export { findCandidateLines }

function findCandidateLines(candidates, type) {
    if(candidates.size > 3 || candidates.size < 2) return false;
    const candidateArr = [...candidates];
    const firstCandidate = candidateArr[0];
    if(candidateArr.every(i => Math.floor(i/3) === Math.floor(firstCandidate/3))){
        return candidateArr;
    }
    if(type === 'boxes' && candidateArr.every(i => i%3 === firstCandidate%3)){
        return candidateArr;
    }
    return false;
}