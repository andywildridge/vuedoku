<template>
  <div>
    <Grid
      title="sudoku"
      :gridVals="gridCandidates"
      :hint="hintOutput"
      :highlights="highlights"
    />
    <button v-on:click="action">get hint</button>
  </div>
</template>

<script>
import Grid from "./components/Grid";
import gridDefn from "./assets/gridDefn";
import convertToGrid from "./utilities/convertToGrid";
import solver from "./modules/solver";

let initialGrid = convertToGrid(gridDefn);
let { getGridCandidates, hint, setSquare, getGrid, deleteCandidate } = solver(
  initialGrid
);

let grid = getGrid();
let original = [...grid];
let gridCandidates = getGridCandidates();
let nextHint;

function displayData(grid, original) {
  let highlights = nextHint?.highlights || {};
  return grid.map((i, idx) => {
    if (original[idx] > 0) {
      return { val: i, type: "original", highlight: highlights[idx] };
    } else if (i > 0) {
      return { val: i, highlight: highlights[idx] };
    } else {
      return {
        val: [...gridCandidates.get(idx)].join(" "),
        type: "possibles",
        highlight: highlights[idx]
      };
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
      gridCandidates: displayData(grid, original)
      // hintOutput: hint(),
    };
  },
  computed() {
    return {
      gridCandidates2: displayData(grid, original)
    };
  },
  created() {
    console.log("created");
    // nextHint = hint();
    this.showHint(nextHint);
  },
  methods: {
    showHint: function(nextHint) {
      console.log("show", nextHint);
    },
    action: function() {
      if (nextHint) {
        if (nextHint.type === "gridSingle" || nextHint.type === "rcbSingle") {
          setSquare(nextHint.index, nextHint.number);
        } else if (nextHint.type === "candidateLine") {
          nextHint.toDelete.forEach(idx =>
            deleteCandidate(idx, nextHint.number)
          );
        } else if (nextHint.type === "blocks") {
          console.log(nextHint);
          nextHint.canDeleteFrom.forEach(idx => {
            nextHint.blockNumbers.forEach(number => {
              deleteCandidate(idx, number);
            });
          });
          nextHint.canDeleteFromX.forEach(idx => {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
              if (!nextHint.blockNumbers.includes(number)) {
                deleteCandidate(idx, number);
              }
            });
          });
        }
        grid = getGrid();
        gridCandidates = getGridCandidates();
      }
      nextHint = hint();
      const { index } = nextHint;
      if (nextHint.type) {
        this.hintOutput = nextHint;
        this.highlights = index;
      } else {
        this.hintOutput = "no next";
      }
      this.gridCandidates = [...displayData(grid, original)];
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
