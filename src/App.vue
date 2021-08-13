<template>
  <div>
    <Grid title="sudoku" :gridVals="gridCandidates" :hint="hintOutput" :highlights="highlights"/>
    <button v-on:click="action">NEXT</button>
  </div>
</template>

<script>
import Grid from "./components/Grid";
import gridDefn from "./assets/gridDefn";
import convertToGrid from "./utilities/convertToGrid";
import solver from "./modules/solver";

let initialGrid = convertToGrid(gridDefn);
let { getGridCandidates, hint, setSquare, getGrid, deleteCandidate } = solver(initialGrid);

let grid = getGrid();
let gridCandidates = getGridCandidates();
let nextHint = hint();

function displayData(grid) {
  return grid.map((i, idx) => {
    if (i > 0) {
      return { val: i, type: "original" };
    } else {
      return { val: [...gridCandidates.get(idx)].join(" "), type: "possibles" };
    }
  });
}

export default {
  name: "App",
  components: {
    Grid
  },
  data() {
    return {
      gridCandidates: displayData(grid),
      hintOutput: { no: "yo" }
    };
  },
  computed() {
    return {
      gridCandidates2: displayData(grid)
    };
  },
  methods: {
    action: function() {
      if(nextHint.type === 'gridSingle' || nextHint.type === 'rcbSingle') {
        setSquare(nextHint.index, nextHint.number);
      }else if(nextHint.type === 'candidateLine') {
        nextHint.toDelete.forEach(idx => deleteCandidate(idx, nextHint.number));
      }
      grid = getGrid();
      gridCandidates = getGridCandidates();
      nextHint = hint();
      const { number, index } = nextHint;
      if (number) {
        this.hintOutput = nextHint;
        this.highlights = index;
      }else{
        this.hintOutput = "no next";
      }
      this.gridCandidates = [...displayData(grid)];
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
