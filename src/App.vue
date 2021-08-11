<template>
  <Grid title="sudoku" :gridVals="gridCandidates" :hint="hint" />
</template>

<script>
import Grid from "./components/Grid";
import gridDefn from "./assets/gridDefn";
import convertToGrid from "./utilities/convertToGrid";
import solver from "./modules/solver";

let grid = convertToGrid(gridDefn);
let { gridCandidates, hint } = solver(grid);

export default {
  name: "App",
  components: {
    Grid
  },
  data() {
    return {
      gridCandidates: grid.map((i, idx) => {
        if (i > 0) {
          return { val: i, type: "original" };
        } else {
          return { val: [...gridCandidates.get(idx)].join( ' ' ), type: "possibles" };
        }
      }),
      hint,
    };
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
