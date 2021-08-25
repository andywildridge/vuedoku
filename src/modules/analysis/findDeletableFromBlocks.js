export { findDeletableFromBlocks };
import typeConvert from "../helpers/typeConvert";
import { intersectSets } from "../helpers/arrayUtils";

function findDeletableFromBlocks(blocks, gridCandidates) {
  //console.log(blocks, gridCandidates);
  let results = [];
  blocks.forEach((i) => {
    let result = checkBlock(i, gridCandidates);
    if (result.canDeleteFrom.length || result.canDeleteFromX.length) {
      results.push(result);
    }
  });
  return results;
}

function checkBlock(block, gridCandidates) {
  //console.log(block);
  let type = typeConvert(block.type);
  let idxInfo = gridCandidates.gridReference({
    [type]: block.index,
    index: block.pairs[0].permutation[0],
  });
  let blockedIdxs = block.pairs[0].permutation.map((square) => {
    return gridCandidates.gridReference({
      [type]: block.index,
      index: square,
    }).gridIndex;
  });
  let related = idxInfo[type].collection.filter((i) => {
    return !blockedIdxs.includes(i);
  });
  let relatedX = idxInfo[type].collection.filter((i) => {
    return blockedIdxs.includes(i);
  });
  let blockNumbers = new Set(block.pairs[0].canContain);
  let canDeleteFrom = related.filter((i) => {
    const candidates = gridCandidates.gridCandidates.get(i);
    if (!candidates) {
      return false;
    }
    /*console.log(
      candidates,
      blockNumbers,
      intersectSets(candidates, blockNumbers)
    );*/
    return intersectSets(candidates, blockNumbers).size > 0;
  });
  //console.log("X");
  let canDeleteFromX = relatedX.filter((i) => {
    const candidates = gridCandidates.gridCandidates.get(i);
    if (!candidates) {
      return false;
    }
    //console.log(candidates, blockNumbers);
    return [...candidates].some((i) => {
      return !blockNumbers.has(i);
    });
  });
  return {
    blockType: type,
    type: "deleteableFromBlocks",
    canDeleteFrom,
    canDeleteFromX,
    blockedIdxs,
    blockNumbers: [...blockNumbers],
  };
}
