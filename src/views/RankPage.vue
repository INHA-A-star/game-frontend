<template>
  <main class="main-container">
    <ProblemHeader></ProblemHeader>
    <h1 class="main-title">🏆 순위</h1>
    <section class="main-section">
      <table>
        <thead>
          <th>RANK</th>
          <th>USER</th>
          <th>SCORE</th>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userInfo" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.score }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import ProblemHeader from '@/components/ProblemHeader';

export default {
  components: {
    ProblemHeader,
  },
  created() {
    // 서버에서 순위 데이터 받아오는 로직
  },
  data() {
    return {
      userInfo: [
        { email: '00000000@inha.edu', score: 1425 },
        { email: '22222222@inha.edu', score: 1250 },
        { email: '33333333@inha.edu', score: 1150 },
        { email: '44444444@inha.edu', score: 1100 },
        { email: '55555555@inha.edu', score: 1070 },
        { email: '66666666@inha.edu', score: 1060 },
        { email: '77777777@inha.edu', score: 1050 },
        { email: '88888888@inha.edu', score: 1040 },
        { email: '99999999@inha.edu', score: 1030 },
        { email: '10101010@inha.edu', score: 1020 },
      ],
    };
  },
};
</script>

<style scoped>
.main-container {
  padding: 3rem;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0 auto;
  width: 1024px;
}
.main-section {
  border: 1px solid darkgray;
  padding: 1rem;
}
.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
table {
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid darkgray;
  text-align: left;
}
th {
  background-color: lightsteelblue;
}
th,
td:first-child {
  font-weight: bold;
}
th:first-child {
  width: 5%;
}
th:last-child {
  width: 10%;
}
th,
td {
  padding: 1rem;
}
th,
tr,
td {
  border: 1px solid darkgray;
}
</style>
