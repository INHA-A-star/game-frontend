<template>
  <section class="main-section">
    <div class="title" @click="toggleTestcase">
      {{ index + 1 }}번 테스트케이스
      <span v-if="isOpen"><i class="fas fa-sort-up"></i></span>
      <span v-else><i class="fas fa-sort-down"></i></span>
    </div>
    <div class="testcase-container" ref="visualization">
      <div v-if="success">
        <h1>정답입니다 😄</h1>
        <p class="score">score: {{ score }}</p>
      </div>
      <div v-else>
        <h1>오답입니다 😓</h1>
        <p>퍼즐 경계를 벗어나는 명령이 포함되어 있습니다.</p>
      </div>
      <div class="process-container">
        <div class="puzzle-container">
          <div class="row" v-for="(row, i) in puzzle" :key="i">
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
          :max="result.length - 1"
          @change="showPuzzleProcess"
        />
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    result: {
      type: Array,
      require: true,
    },
    status: {
      type: String,
    },
    index: {
      type: Number,
      require: true,
    },
  },
  created() {
    this.puzzle = this.result[0].puzzle;
    if (this.status && this.status === 'failed') {
      this.success = false;
    }
  },
  data() {
    return {
      puzzle: [],
      success: true,
      score: 1425,
      isOpen: false,
    };
  },
  methods: {
    showPuzzleProcess(e) {
      this.puzzle = this.result[e.target.value].puzzle;
    },
    toggleTestcase() {
      this.isOpen = !this.isOpen;
      this.$refs.visualization.style.display = this.isOpen ? 'flex' : 'none';
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.2rem;
}
.main-section {
  border: 1px solid darkgray;
  padding: 2rem;
  margin-top: 2rem;
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
.testcase-container {
  display: none;
  justify-content: space-evenly;
  align-items: center;
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
  flex-grow: 1;
}
.col {
  width: 25%;
  flex-grow: 1;
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
