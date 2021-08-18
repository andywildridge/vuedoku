<template>
  <div>
    <h2>{{ title }}</h2>
    <div id="grid">
      <div
        class="square"
        v-for="(square, index) in gridData"
        :key="index"
        :class="{[square.type]: true, [square.highlight]: square.highlight}"
        :gridSingle="square.gridSingle"
        :collectionSingle="square.collectionSingle"
      >
        {{ square.val }}
      </div>
    </div>
    <h3>{{ hint?.message }}</h3>
    <h5>{{ hint }}</h5>
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
      gridData: this.gridVals,
      highlights: {},
    };
  },
  watch: {
    gridVals: function() {
      console.log(this.highlights);
      this.gridData = this.gridVals.map((square)=>{
        // console.log(square, idx);
        return {
          ...square,
        }
      });
      console.log(this.gridData);
    },
    hint: function() {
      console.log("hint change");
      this.highlights = {
        target: this.hint.index
      }
    }
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
.square.original {
  font-weight: bold;
}
.square.possibles {
  font-size: 7px;
}
.square.target {
  background: green;
}
.square.not {
  background: yellow;
}
.square.number { background: pink; }
.square.blockingNumber { background: pink; }


.square[gridSingle] {
  background: yellow;
}
.square[collectionSingle] { background: green; }

</style>
