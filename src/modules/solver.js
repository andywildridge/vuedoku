import { findGridCandidates } from "./findGridCandidates";
import { findRowColBoxCandidates } from "./findRowColBoxCandidates";
import { getHint } from "./getHint.js";

const solver = (grid) => {
  console.log(grid);
  let gridCandidates = findGridCandidates(grid);

  function analyse() {
    //console.log("solver", gridCandidates);
    console.time("Time this");
    let rowColBoxCandidates = findRowColBoxCandidates(gridCandidates);
    //console.log("rcb", rowColBoxCandidates);
    console.timeEnd("Time this");
    return {
      rowColBoxCandidates,
    };
  }

  let { rowColBoxCandidates } = analyse();

  function hint() {
    ({ rowColBoxCandidates } = analyse());
    return getHint(rowColBoxCandidates, gridCandidates, grid);
  }

  function setSquare(index, number) {
    grid[index] = number;
    // console.log(grid);
    gridCandidates.gridCandidates.delete(index);

    const gridInfo = gridCandidates.gridReference({ index });
    const relatedSquares = [
      ...new Set([
        ...gridInfo.row.collection,
        ...gridInfo.col.collection,
        ...gridInfo.box.collection,
      ]),
    ];
    relatedSquares.forEach(i => {
      gridCandidates.gridCandidates.get(i)?.delete(number);
    });
    // subtract from collections rather than recalc
    ({ rowColBoxCandidates } = analyse());
  }

  function deleteCandidate(idx, number) {
    gridCandidates.gridCandidates.get(idx)?.delete(number);
  }

  return {
    getGrid: () => grid,
    getGridCandidates: () => gridCandidates.gridCandidates,
    hint,
    setSquare,
    deleteCandidate,
  };

  // console.log(hint);
  // find good way to get match!

  /* gridCandidates.gridCandidates.forEach((val, key) => {
        if(val.size === 1 && !hint){
           hint = { key, val: [...val][0], info: 'grid single' }
        }
    }); */
};

export default solver;
