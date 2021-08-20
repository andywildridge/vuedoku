<template>
  <div>
    <h2>{{ title }}</h2>
    <svg id="svgfilters">
      <defs>
        <filter id="motionblur">
          <feConvolveMatrix
            order="20, 1"
            kernelMatrix="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
          />
        </filter>
      </defs>
    </svg>
    <div id="grid">
      <div
        class="square"
        v-for="(square, index) in gridData"
        :key="index"
        :class="{ [square.type]: true, [square.highlight]: square.highlight }"
        :gridSingle="square.gridSingle"
        :collectionSingle="square.collectionSingle"
      >
        {{ square.val }}
      </div>
    </div>
    <h3>{{ hint?.message }}</h3>
    <!--<h5>{{ hint }}</h5>-->
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
      highlights: {}
    };
  },
  watch: {
    gridVals: function() {
      console.log(this.highlights);
      this.gridData = this.gridVals.map(square => {
        // console.log(square, idx);
        return {
          ...square
        };
      });
      console.log(this.gridData);
    },
    hint: function() {
      console.log("hint change");
      this.highlights = {
        target: this.hint.index
      };
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

#svgfilters {
  display: none;
}

#grid {
  width: 200px;
  height: 200px;
  background: yellow;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  cursor: pointer;
  background: url(../assets/square.svg), url(../assets/square.svg),
    url(../assets/square.svg);
  background-size: 11.1111%, 33.3333%, 100%;
}
.square {
  background: url(../assets/square.svg);
  background-size: 100%;
}
.square.original {
  font-weight: bold;
  filter: url(#motionblur);
}
.square.possibles {
  font-size: 7px;
  color: rgba(255, 206, 206, 0.5);
}
.square.target {
  background-color: #afffaf75;
  background-image: url(../assets/square.svg);
  background-size: 100%;
}
.square.not {
  background-color: rgba(255, 255, 0, 0.5);
  background-image: url(../assets/square.svg);
  background-size: 100%;
}
.square.number {
  background: rgba(255, 192, 203, 0.5);
}
.square.blockingNumber {
  background-color: rgba(255, 192, 203, 0.5);
  background-image: url(../assets/square.svg);
  background-size: 100%;
}

.square[gridSingle] {
  background: yellow;
}
.square[collectionSingle] {
  background: #afffaf;
}
</style>
