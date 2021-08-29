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

        <filter
          xmlns="http://www.w3.org/2000/svg"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
          id="pencilTexture3"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="5"
            stitchTiles="stitch"
            result="f1"
          ></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"
            result="f2"
          ></feColorMatrix>
          <feComposite
            operator="in"
            in2="f2b"
            in="SourceGraphic"
            result="f3"
          ></feComposite>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="3"
            result="noise"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="2.5"
            in="f3"
            result="f4"
          ></feDisplacementMap>
        </filter>

        <filter
          xmlns="http://www.w3.org/2000/svg"
          x="0%"
          y="0%"
          width="120%"
          height="120%"
          filterUnits="objectBoundingBox"
          id="pencilTexture3b"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="5"
            stitchTiles="stitch"
            result="f1"
          ></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"
            result="f2"
          ></feColorMatrix>
          <feComposite
            operator="in"
            in2="f2b"
            in="SourceGraphic"
            result="f3"
          ></feComposite>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="3"
            result="noise"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="2.5"
            in="f3"
            result="f4"
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

        <filter
          xmlns="http://www.w3.org/2000/svg"
          x="-20%"
          y="-20%"
          width="240%"
          height="240%"
          filterUnits="objectBoundingBox"
          id="pencilTexture4"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="5"
            seed="1"
            result="f1"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="5"
            in="SourceGraphic"
            in2="f1"
            result="f4"
          ></feDisplacementMap>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="5"
            seed="10"
            result="f2"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="5"
            in="SourceGraphic"
            in2="f2"
            result="f5"
          ></feDisplacementMap>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="5"
            seed="100"
            result="f3"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="3"
            in="SourceGraphic"
            in2="f3"
            result="f6"
          ></feDisplacementMap>
          <feBlend mode="multiply" in2="f4" in="f5" result="out1"></feBlend>
          <feBlend mode="multiply" in="out1" in2="f6" result="out2"></feBlend>
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
    <p class="hint" v-html="hint?.message"></p>
    <!--<h5>{{ hint }}</h5>-->
    <button v-on:click="toggleInput">input</button>
    <button v-on:click="togglePossibles">possibles {{ showPossibles }}</button>
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
h2,
h3,
p {
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
  margin-bottom: 2rem;
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
  filter: url(#PencilTexture3b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(50vh / 9 - 16px);
  line-height: calc(50vh / 9 - 16px);
  z-index: 1;
  overflow: hidden;
  color: #666;
}
.square.original {
  font-weight: bold;
  filter: none;
  color: #111;
  font-size: calc(50vh / 9 - 10px);
  line-height: calc(50vh / 9 - 10px);
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
.square.target,
.hint .target {
  background-color: #afffaf75;
}
.square.not,
.hint .not {
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
.hint {
  width: 40vh;
  max-width: 90%;
  margin: 0 auto 2rem;
  line-height: 1.8;
}
</style>
<style>
.hint .target {
  background-color: #afffaf75;
  padding: 3px;
  border-bottom: 1px solid #6eb16e;
}
.hint .not {
  background-color: rgba(255, 255, 0, 0.5);
  padding: 3px;
  border-bottom: 1px solid rgba(163, 163, 6);
}
.hint .blockingNumber {
  background-color: rgba(255, 192, 203, 0.5);
  padding: 3px;
  border-bottom: 1px solid rgb(158, 90, 101);
}
</style>
