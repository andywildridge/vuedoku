export default function gridSingleHint(gridSingle, gridCandidates, grid) {
  const index = gridSingle.index;
  const highlights = { [index]: "target" };
  gridCandidates.gridReference({ index }).related.forEach((i) => {
    if (grid[i] > 0) {
      highlights[i] = "blockingNumber";
    }
  });
  let message = `${gridSingle.number} can only fit here as all other numbers already appear in the same row, column or box`;
  return { ...gridSingle, type: "gridSingle", highlights, message };
}
