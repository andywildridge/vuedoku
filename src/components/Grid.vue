<template>
  <div>
    <h2>{{ title }}</h2>
    <div id="grid">
      <div
        class="square"
        v-for="(square, index) in gridData"
        :key="index"
        :class="square.type"
        :gridSingle="square.gridSingle"
        :collectionSingle="square.collectionSingle"
      >
        {{ square.val }}
      </div>
    </div>
    <h3>{{ hints }}</h3>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    title: String,
    gridVals: Array,
    hint: Object
  },
  data() {
    return {
      gridData: [...this.gridVals].map((i) => {
        return {
          ...i
        };
      })
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: red;
}
h3 {
  color: green;
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
.square {
  background: white;
}
.square.possibles {
  font-size: 7px;
}
.square[gridSingle] {
  background: yellow;
}
.square[collectionSingle] { background: green; }

</style>
