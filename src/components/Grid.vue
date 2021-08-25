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
        <filter
          x="-2%"
          y="-2%"
          width="104%"
          height="104%"
          filterUnits="objectBoundingBox"
          id="PencilTexture"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="3"
            result="noise"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="3"
            in="SourceGraphic"
            result="newSource"
          ></feDisplacementMap>
        </filter>

        <filter id="roughpaper" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            result="noise"
            numOctaves="5"
          />

          <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="2">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>
      </defs>
    </svg>
    <div id="grid">
      <div
        class="square"
        v-for="(square, index) in gridData"
        :key="index"
        :class="{
          [square.type]: true,
          [square.highlight]: square.highlight,
          [square.rotate]: square.rotate
        }"
        :gridSingle="square.gridSingle"
        :collectionSingle="square.collectionSingle"
        v-on:click="squareInput(e, index)"
      >
        {{ getSquareVal(square) }}
      </div>
    </div>
    <p>{{ hint?.message }}</p>
    <!--<h5>{{ hint }}</h5>-->
    <button v-on:click="toggleInput">input</button>
    <button v-on:click="togglePossibles">possibles</button>
    <p>{{ showPossibles }}</p>
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
      showPossibles: false
    };
  },
  methods: {
    togglePossibles() {
      console.log(this.showPossibles);
      this.showPossibles
        ? (this.showPossibles = false)
        : (this.showPossibles = true);
    },
    toggleInput() {
      console.log("input");
    },
    squareInput(e, index) {
      console.log("sq", index);
    },
    getSquareVal(square) {
      if (square.type === "possibles") {
        if (this.showPossibles) {
          return square.val;
        } else {
          return "";
        }
      } else if (square.type === "gridSingle") {
        return "*";
      } else {
        return square.val;
      }
    }
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
h2, h3, p {
  color: rgb(65, 65, 65);
}

#svgfilters {
  display: none;
}

#grid {
  height: 50vh;
  max-height: 600px;
  aspect-ratio: 1 / 1;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  cursor: pointer;
  position: relative;
  filter: drop-shadow(0px 4px 5px #999);
}
#grid::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f9f8f3;
  background-size: cover;
  z-index: 0;
}

#grid::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(../assets/square.svg), url(../assets/square.svg),
    url(../assets/square.svg);
  background-size: 11.1111%, 33.3333%, 100%;
  pointer-events: none;
  z-index: 2;
}
.square {
  filter: url(#PencilTexture);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(50vh / 9 - 6px);
  line-height: calc(50vh / 9 - 6px);
  z-index: 1;
  overflow: hidden;
  color: #666;
}
.square.original {
  font-weight: bold;
  filter: none;
  color: #111;
  font-size: calc(50vh / 9 - 2px);
  line-height: calc(50vh / 9 - 2px);
}
.square.possibles {
  font-size: 7px;
  color: black;
  filter: none;
  align-items: baseline;
  padding: 10% 20%;
  justify-content: flex-end;
  text-align: right;
}
.square.target {
  background-color: #afffaf75;
}
.square.not {
  background-color: rgba(255, 255, 0, 0.5);
}
.square.number {
  background: rgba(255, 192, 203, 0.5);
}
.square.blockingNumber {
  background-color: rgba(255, 192, 203, 0.5);
}
.square[gridSingle] {
  background: yellow;
}
.square[collectionSingle] {
  background: #afffaf;
}
.r1,
.r2,
.r3 {
  /* transform: rotate(5deg); */
}

.r4,
.r5,
.r0 {
  /* transform: rotate(2deg); */
}
</style>
