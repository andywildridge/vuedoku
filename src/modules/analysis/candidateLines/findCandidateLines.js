export { findCandidateLines }

/**
 * find groups of candidates that are limited to a 1/3 segement of a row,
 * column or box. these can be used to eliminate adjacent candidates.
 */

function findCandidateLines(candidates, type) {
    if(candidates.size < 2 || candidates.size > 3) return false;
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