<template>
  <Grid msg="vuedoku" :gridVals="grid"/>
</template>

<script>
import Grid from './components/Grid'
import gridDefn from './assets/gridDefn'
import convertToGrid from './utilities/convertToGrid'
import solver from './modules/solver'

let grid = convertToGrid(gridDefn);
solver(grid);

export default {
  name: 'App',
  components: {
    Grid
  },
  data() {
      return {
          grid: grid,
      }
  }
}
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
