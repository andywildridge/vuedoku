<template>
  <div>
    <h2>{{msg}}</h2>
    <div id="grid">
      <div class="square" v-for="(square, index) in gridVals" :key="index">
          {{ square }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    msg: String,
    gridVals: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: red;
}
#grid {
  width: 200px;
  height: 200px;
  background: yellow;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  cursor: pointer;
  background-size: contain;
}
.square{
  background: white;
}
</style>
