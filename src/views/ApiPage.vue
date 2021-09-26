<template>
  <main class="main-container">
    <ProblemHeader></ProblemHeader>
    <h1 class="main-title">📄 API 문서</h1>
    <section class="main-section">
      <div class="main-text">
        <h2 class="sub-title">4 x 4 슬라이딩 퍼즐</h2>
        <p>
          슬라이딩 퍼즐은 플레이어가 보드 상에 나열된 납작한 조각판을 움직여
          올바른 모양을 맞춰야하는 퍼즐입니다.<br />
          상, 하, 좌, 우로 움직이며 퍼즐을 정렬해주세요.
        </p>
        <h2 class="sub-title">목표</h2>
        <p>
          서버로부터 현재 퍼즐의 상태를 받아와 "U", "D", "L", "R" 4가지 명령을
          이용해 퍼즐을 완성해주세요.<br />
          "U", "D", "L", "R" 명령어는 빈칸을 기준으로 동작합니다.
        </p>

        <table>
          <tr>
            <td>"U"</td>
            <td>빈칸을 위로 움직인다.</td>
          </tr>
          <tr>
            <td>"D"</td>
            <td>빈칸을 아래로 움직인다.</td>
          </tr>
          <tr>
            <td>"L"</td>
            <td>빈칸을 왼쪽으로 움직인다.</td>
          </tr>
          <tr>
            <td>"R"</td>
            <td>빈칸을 오른쪽으로 움직인다.</td>
          </tr>
        </table>
        <br />가장 적은 명령을 이용해 퍼즐을 맞출수록 더 높은 점수를 획득할 수
        있습니다.
        <h2 class="sub-title">명령어 동작 예시</h2>
        <div>
          <img
            src="../images/puzzle-1.png"
            alt="puzzle-example"
            width="100%"
            height="100%"
          />
        </div>
        <p></p>
        <h2 class="sub-title">퍼즐 API</h2>
        <p class="auth-token">
          나의 auth_token: af4790fc2b11ee722e24cc88cc9ca953
        </p>
        <ol>
          <li>
            <p>퍼즐 초기 상태 요청</p>
            <div class="request">
              GET /puzzles<br />
              Authorization: {auth_token}<br />
              Content-Type: application/json<br />
            </div>
          </li>
          <li>
            <p>퍼즐 처리 요청</p>
            <div class="request">
              POST /puzzles<br />
              Authorization: {auth_token}<br />
              Content-Type: application/json<br />
            </div>
          </li>
        </ol>
        <h2 class="sub-title">점수</h2>
        <p>달성률 점수 + 효율성 점수를 총합한 결과가 최종 점수가 됩니다.</p>
        <table>
          <thead>
            <th>구분</th>
            <th>공식</th>
          </thead>
          <tbody>
            <tr>
              <td>달성률 점수</td>
              <td>1000점</td>
            </tr>
            <tr>
              <td>효율성 점수</td>
              <td>1000 / (사용한 명령어 수)</td>
            </tr>
            <tr>
              <td>총점</td>
              <td>
                (달성률 점수) X 0.95 + (효율성 점수) X 0.05 와 0 중 더 큰 값
              </td>
            </tr>
          </tbody>
        </table>
        <h2 class="sub-title">참고</h2>
        <ul>
          <li>각 시나리오의 총점은 모든 시도 중 최고 점수로 반영된다.</li>
        </ul>
        <h2 class="sub-title">예시</h2>
        <figure class="puzzle-example">
          <img
            src="../images/puzzle-3.png"
            alt="puzzle-example"
            width="100%"
            height="100%"
          />
          <figcaption>
            현재 퍼즐의 상태에서 “U”, “R”, “D”, “R” 순서대로 명령을 내리면,<br />
            최소한의 명령으로 퍼즐을 완성할 수 있습니다.
          </figcaption>
        </figure>
      </div>
    </section>
  </main>
</template>

<script>
import ProblemHeader from '@/components/problems/ProblemHeader';
export default {
  components: {
    ProblemHeader,
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
}
.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.sub-title:first-child {
  margin-top: -0.5rem;
}
.sub-title {
  color: slategrey;
  font-size: 1.5rem;
  font-weight: bold;

  margin-top: 3rem;
  margin-bottom: 1rem;
}
.main-text {
  padding: 2rem;
}
.main-text p {
  line-height: 2rem;
}
.main-text ol {
  list-style-type: decimal;
  margin-left: 1rem;
}
.request {
  background-color: #e9ecf3;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;
  line-height: 1.5;
}
.auth-token {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.puzzle-example {
  width: 500px;
}
.puzzle-example figcaption {
  margin-top: 1rem;
  line-height: 1.5;
}
table {
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid darkgray;
  text-align: left;
}
th,
td:first-child {
  font-weight: bold;
}
th,
td {
  padding: 0.5rem;
}
th,
tr,
td {
  border: 1px solid darkgray;
}
</style>
