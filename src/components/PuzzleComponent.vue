<template>
  <div class="puzzle-container">
    <div class="row" v-for="(row, i) in puzzles" :key="i">
      <div class="col" v-for="(piece, j) in row" :key="j">
        <div v-if="piece" class="piece paint">
          {{ piece }}
        </div>
        <div v-else class="piece" style="display: none">
          {{ piece }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    console.log('비포마운트');
    console.log(this.keyCode);
  },
  beforeUpdate() {
    console.log(this.keyCode);
  },
  props: {
    keyCode: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tep: this.keyCode,
      initialIndex: {
        row: 3,
        col: 1,
      },
      initialPuzzles: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 14, 10, 12],
        [13, 0, 11, 15],
      ],
      puzzles: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 14, 10, 12],
        [13, 0, 11, 15],
      ],
    };
  },
};
</script>

<style scoped>
.puzzle-container {
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  width: 400px;
  height: 400px;

  margin: 0 auto;
  padding: 0.5rem;
}
.row {
  display: flex;
  width: 100%;
  /*border: 1px solid blue;*/
  flex-grow: 1;
}
.col {
  width: 25%;
  flex-grow: 1;
  /*border: 1px solid green;*/
  margin: 0.2rem;
}
.piece {
  width: 100%;
  height: 100%;

  padding: 1.8rem;
  border: 1px solid darkgrey;

  text-align: center;
}
.paint {
  background-color: oldlace;
}
</style>
