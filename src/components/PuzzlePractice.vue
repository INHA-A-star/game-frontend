<template>
  <div>
    <button class="open-btn" @click="openModal">퍼즐 맞춰보기</button>
    <AppModal v-if="isDisplay">
      <template v-slot:header>
        <button class="close-btn" @click="closeModal">❌</button>
        <h1>방향키를 이용해 퍼즐을 움직여 볼 수 있습니다!</h1>
      </template>
      <template v-slot:main>
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
    </AppModal>
  </div>
</template>

<script>
import * as _ from 'lodash';
import AppModal from '@/components/common/AppModal';

export default {
  components: {
    AppModal,
  },
  data() {
    return {
      isDisplay: false,
      initialIndex: {
        row: 1,
        col: 1,
      },
      puzzles: [
        [11, 13, 6, 3],
        [2, 0, 1, 9],
        [5, 7, 15, 12],
        [4, 14, 8, 10],
      ],
    };
  },
  methods: {
    temp(e) {
      const keyCode = e.keyCode;

      let { row, col } = this.initialIndex;

      if (this.isNotBoundary(keyCode, row, col)) {
        return;
      }

      const clonePuzzle = _.cloneDeep(this.puzzles);

      if (keyCode === 37) {
        [clonePuzzle[row][col], clonePuzzle[row][col - 1]] = [
          clonePuzzle[row][col - 1],
          clonePuzzle[row][col],
        ];

        this.puzzles = clonePuzzle;
        this.initialIndex.col--;
      } else if (keyCode === 38) {
        [clonePuzzle[row][col], clonePuzzle[row - 1][col]] = [
          clonePuzzle[row - 1][col],
          clonePuzzle[row][col],
        ];

        this.puzzles = clonePuzzle;
        this.initialIndex.row--;
      } else if (keyCode === 39) {
        [clonePuzzle[row][col], clonePuzzle[row][col + 1]] = [
          clonePuzzle[row][col + 1],
          clonePuzzle[row][col],
        ];

        this.puzzles = clonePuzzle;
        this.initialIndex.col++;
      } else if (keyCode === 40) {
        [clonePuzzle[row][col], clonePuzzle[row + 1][col]] = [
          clonePuzzle[row + 1][col],
          clonePuzzle[row][col],
        ];

        this.puzzles = clonePuzzle;
        this.initialIndex.row++;
      }
    },
    isNotBoundary(keyCode, row, col) {
      if (keyCode === 37) {
        return col - 1 < 0;
      } else if (keyCode === 38) {
        return row - 1 < 0;
      } else if (keyCode === 39) {
        return col + 1 >= 4;
      } else if (keyCode === 40) {
        return row + 1 >= 4;
      }
    },
    openModal() {
      this.isDisplay = true;
      document.body.style.overflowY = 'hidden';
      document.body.addEventListener('keydown', this.temp);
    },
    closeModal() {
      this.isDisplay = false;
      document.body.style.overflowY = 'auto';
      document.body.removeEventListener('keydown', this.temp);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.open-btn {
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  margin-top: 1rem;

  background-color: lightsteelblue;

  color: white;
  font-weight: bold;
}
.open-btn:hover {
  background-color: cornflowerblue;
}
.open-btn:active {
  transform: translate(0, 3px);
}
.close-btn {
  display: block;
  border: 0;
  margin-left: auto;
  background-color: white;
}
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
