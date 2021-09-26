<template>
  <main class="main-container">
    <ProblemHeader></ProblemHeader>
    <h1 class="main-title">📊 결과</h1>
    <section class="main-section">
      <div v-if="score">
        <h1>정답입니다 😄</h1>
        <p class="score">score: {{ score }}</p>
      </div>
      <div v-else>
        <h1>오답입니다 :(</h1>
      </div>
      <div class="process-container">
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
        <input
          class="range"
          type="range"
          value="0"
          min="0"
          :max="userCommands.length"
          @change="showPuzzleProcess"
        />
        <p></p>
      </div>
    </section>
  </main>
</template>

<script>
import ProblemHeader from '@/components/problems/ProblemHeader';
import * as _ from 'lodash';
export default {
  components: {
    ProblemHeader,
  },
  created() {
    // userCommands에 대한 정보 서버로부터 받아오는 로직.
  },
  data() {
    return {
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
      score: 1425,
      userCommands: ['U', 'R', 'D', 'R'],
    };
  },
  methods: {
    showPuzzleProcess(e) {
      const end = e.target.value;
      let initialPuzzles = _.cloneDeep(this.initialPuzzles);
      let blankIndex = Object.assign({}, this.initialIndex);

      for (let i = 0; i < end; i++) {
        let command = this.userCommands[i];

        // 해당하는 곳으로 이동할 수 있는지 판단하는 로직 추가하기.

        let { row, col } = blankIndex;
        if (command === 'U') {
          [initialPuzzles[row][col], initialPuzzles[row - 1][col]] = [
            initialPuzzles[row - 1][col],
            initialPuzzles[row][col],
          ];

          row--;
        } else if (command === 'D') {
          [initialPuzzles[row][col], initialPuzzles[row + 1][col]] = [
            initialPuzzles[row + 1][col],
            initialPuzzles[row][col],
          ];

          row++;
        } else if (command === 'L') {
          [initialPuzzles[row][col], initialPuzzles[row][col - 1]] = [
            initialPuzzles[row][col - 1],
            initialPuzzles[row][col],
          ];

          col--;
        } else {
          [initialPuzzles[row][col], initialPuzzles[row][col + 1]] = [
            initialPuzzles[row][col + 1],
            initialPuzzles[row][col],
          ];

          col++;
        }

        blankIndex = { row, col };
      }
      this.puzzles = initialPuzzles;
    },
  },
};
</script>

<style scoped>
.main-container {
  padding: 3rem;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0 auto;
  width: 1024px;
  min-height: 74vh;
}
.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.main-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid darkgray;
  padding: 1rem;
}
.main-section h1 {
  padding: 1rem 0;

  font-size: 2rem;
  font-weight: bold;
}
.score {
  color: darkgrey;
  font-size: 1.5rem;
}
.puzzle-container {
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  width: 400px;
  height: 400px;

  margin-bottom: 1rem;
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
.range {
  width: 100%;
}
</style>
