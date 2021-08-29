export default function gridSingleHint(gridSingle, gridCandidates, grid) {
  const index = gridSingle.index;
  const highlights = { [index]: "target" };
  gridCandidates.gridReference({ index }).related.forEach((i) => {
    if (grid[i] > 0) {
      highlights[i] = "blockingNumber";
    }
  });
  let message = `<span class="target">${gridSingle.number} is the only number</span> that can be placed at this position in the grid as <span class="blockingNumber">all other numbers</span> already appear in the same row, column or box`;
  return { ...gridSingle, type: "gridSingle", highlights, message };
}
