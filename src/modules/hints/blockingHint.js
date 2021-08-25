export default function blockingHint(deletableFromBlocks, gridCandidates) {
  let block = deletableFromBlocks;
  const highlights = {};
  let nots = gridCandidates.gridReference({ index: block.blockedIdxs[0] })[
    block.blockType
  ].collection;
  nots.forEach((i) => {
    highlights[i] = "not";
  });
  highlights[block.blockedIdxs[0]] = "target";
  highlights[block.blockedIdxs[1]] = "target";
  let message = `${block.blockNumbers[0]} and ${block.blockNumbers[1]} can only fit in these places in this ${block.blockType}`;
  return {
    ...block,
    type: "blocks",
    message,
    highlights,
  };
}