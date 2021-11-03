<template>
  <main class="main-container">
    <ProblemHeader></ProblemHeader>
    <h1 class="main-title">📄 API 문서</h1>
    <section class="main-section">
      <TextItem title="개요">
        <template v-slot:content>
          <p>
            15-퍼즐은 4x4 격자 판에서 타일들을 정렬하는 퍼즐입니다.<br />
            타일은 15개가 있습니다. 각각 1에서 15까지 번호가 매겨져 있고,
            초기에는 무작위로 뒤섞여 있습니다.<br />
            빈 칸이 하나 남게 되는데 빈 칸에 인접한 타일을 밀어서 빈 칸으로
            이동하면 빈 칸이었던 자리에는 이동한 타일이 있게 되고, 해당 타일이
            있던 자리는 빈 칸이 됩니다. <br />
            타일들을 적절히 움직여서 번호가 정렬된 상태로 만들어봅시다.
          </p>
          <br />
          <img
            src="../images/puzzle-0.png"
            alt="puzzle"
            width="100%"
            height="100%"
          />
          <PuzzlePractice></PuzzlePractice>
        </template>
      </TextItem>
      <TextItem title="이동">
        <template v-slot:content>
          <p>타일을 이동하는 방법은 총 4가지가 있습니다.<br /></p>
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
          <br />
          <p>
            각 방향으로 이동할 수 있는 타일이 있다면, 해당 타일을 이동하고
            <strong>이동 횟수</strong>가 1 증가합니다.<br />
            격자의 상태는 타일이 이동한 상태로 바뀝니다.<br />
            이동할 수 있는 타일이 없다면, 상태가 바뀌지 않고
            <strong>이동 실패 횟수</strong>가 1 증가합니다.
          </p>
        </template>
      </TextItem>
      <TextItem title="제한">
        <template v-slot:content>
          <ul>
            <li>정렬이 불가능한 퍼즐 상태는 입력으로 주어지지 않습니다.</li>
            <li>4x4 격자가 아닌 경우는 입력으로 주어지지 않습니다.</li>
            <li>
              5개의 테스트 케이스가 있고, 서로 다른 퍼즐의 초기 상태가
              주어집니다.
            </li>
            <li>
              각 퍼즐은 500번을 초과하지 않는 이동 방법이 반드시 존재합니다.
            </li>
          </ul>
        </template>
      </TextItem>
      <TextItem title="결과">
        <template v-slot:content>
          <h3 style="color: green">Accept</h3>
          <p>
            모든 테스트 케이스에 대하여 정렬에 성공한 경우 점수를 얻게
            됩니다.<br />
            점수는 5개 테스트 케이스에 대하여
            <span class="highlighter">(1000 - S - F)</span> 의 평균으로
            산정합니다.<br />
            <span class="highlighter">S</span>
            = 이동 횟수<br />
            <span class="highlighter">F</span> = 이동 실패 횟수<br />
          </p>

          <h3 style="color: red">WA (Wrong Answer)</h3>
          <p>
            5개 테스트 케이스 중 하나라도 이동 횟수가 500번을 넘어가거나, 결과가
            정렬되지 않았다면 받게 됩니다.
          </p>

          <h3>AT (Abnormal Termination)</h3>
          <p>
            현재 채점이 완전히 끝나지 않고 다른 채점이 시작되면 받게 됩니다.
          </p>
        </template>
      </TextItem>
      <TextItem title="예시">
        <template v-slot:content>
          <div>
            <img
              src="../images/puzzle-4.png"
              alt="puzzle-example"
              width="50%"
              height="50%"
            />
          </div>
          <p>
            위의 퍼즐을 풀기 위해서는, 타일을
            <span class="highlighter">U U L</span> 순서로 세 번에 걸쳐 이동하는
            방법이 최적입니다.<br /><span class="highlighter"
              >L U R D L U R D L U</span
            >
            순서로 이동하더라도 퍼즐을 풀 수는 있지만, 이동 횟수가 많아져 높은
            점수를 얻을 수 없습니다.
          </p>
        </template>
      </TextItem>
      <TextItem title="API 명세">
        <template v-slot:content>
          <p>
            HTTPS로 서버와 통신하며 api를 사용할 수 있습니다.<br />
            요청과 응답은 모두 json 포맷을 이용해야 합니다.
          </p>
          <h3>Status Codes</h3>
          <ul>
            <li>200 OK | 호출 성공</li>
            <li>201 Created | 생성 성공</li>
            <li>400 Bad Request | 파라미터 값 오류</li>
            <li>401 Unauthorized | 인증 오류</li>
            <li>5xx Server Error | 서버 에러, 관리자 문의 필요</li>
          </ul>

          <h3 class="api">Start API</h3>
          <p>
            새로운 채점을 시작합니다.<br />

            사용자 식별 값을 가지고 인증 토큰을 만들어 반환합니다. 이후로 모든
            쿼리에 대해 같은 토큰 값으로 인증해야 정상적인 결과를 얻을 수
            있습니다.<br />

            모든 테스트 케이스 퍼즐을 초기화합니다.<br />

            이전 채점을 끝내지 않고 <strong>Start API</strong>를 호출하면 이전
            채점은 중단되며 결과는 AT가 됩니다.<br />
          </p>
          <h4>request</h4>
          <div class="request">
            POST /start<br />
            X-Auth-Token: {X-Auth-Token}<br />
            Content-Type: application/json<br />
          </div>
          <p>
            {X-Auth-Token} : 사용자 식별 값으로, 내 정보 - 인증 메뉴에서 확인할
            수 있습니다.
          </p>
          <h4>example</h4>
          <div class="request">
            curl -X POST {URL}/start<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'X-Auth-Token:
            {X-Auth-Token}'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type:
            application/json'
          </div>
          <h4>response</h4>
          <div class="request">
            HTTP/1.1 201 Created<br />
            { <br />&nbsp;&nbsp;&nbsp;&nbsp;"time-stamp": 0,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"auth-key":
            "DFE7905AE8317C16F768B919EC83505F393C9B1C7CAC9"<br />}
          </div>

          <h3 class="api">Status API</h3>
          <p>case번째 테스트 케이스 퍼즐의 현재 상태를 반환합니다.</p>
          <h4>request</h4>
          <div class="request">
            GET /status/{case}<br />
            Authorization: {auth-key}<br />
            Content-Type: application/json<br />
          </div>
          <p>
            {case} : 테스트 케이스의 번호입니다. (1 ≤ case ≤ 5)<br />
            {auth-key} : <strong>Start API</strong>를 통해 발급 받은 인증
            토큰입니다.
          </p>
          <h4>example</h4>
          <div class="request">
            curl -X GET {URL}/status/1<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H ''Authorization:
            {auth-key}'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type:
            application/json'
          </div>
          <h4>response</h4>
          <div class="request">
            HTTP/1.1 200 OK<br />
            { <br />&nbsp;&nbsp;&nbsp;&nbsp;"time-stamp": 23,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"puzzle": [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1, 5, 4, 9],<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[7, 3, 12, 11],<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[14, 2, 6, 10],<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[15, 13, 0, 8]<br />
            &nbsp;&nbsp;&nbsp;&nbsp;]
            <br />}
          </div>

          <h3 class="api">Move API</h3>
          <p>
            case번째 테스트 케이스 퍼즐을 조작합니다.<br />
            이동 명령은 정수의 배열로 전달됩니다.<br />
            한 번에 하나의 이동만 할 수도 있고, 한 번에 여러 개의 이동 명령을
            보내 이동할 수도 있습니다.
          </p>
          <div class="request">
            <span class="emphasize">0</span>: <span class="emphasize">U</span>,
            위쪽으로 이동<br />
            <span class="emphasize">1</span>: <span class="emphasize">R</span>,
            오른쪽으로 이동<br />
            <span class="emphasize">2</span>: <span class="emphasize">D</span>,
            아래쪽으로 이동<br />
            <span class="emphasize">3</span>: <span class="emphasize">L</span>,
            왼쪽으로 이동<br />
          </div>
          모든 이동에 대해 <strong>이동 횟수</strong>와
          <strong>이동 실패 횟수</strong>가 누적됩니다. API 호출 횟수는 결과에
          영향이 없습니다.

          <h4>request</h4>
          <div class="request">
            PUT /move/{case}<br />
            Authorization: {auth-key}<br />
            Content-Type: application/json
          </div>

          <h4>example</h4>
          <div class="request">
            curl -X POST {URL}/start<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Authorization:
            {auth-key}'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type:
            application/json'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-d '{ "commands": [2, 3,
            1, 0, 1, 2] }'
          </div>
          <h4>response</h4>
          <div class="request">
            HTTP/1.1 201 Created<br />
            { <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"time-stamp": 95,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"moved": 5,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"failed": 1<br />
            }
          </div>

          <!--          -->
          <h3 class="api">Finish API</h3>
          <p>
            채점을 종료합니다.<br />
            호출되는 시점을 기준으로 점수를 산정하고 반환합니다.<br />
            이후로는 이번 채점에서 <strong>Start API</strong>로 발급받은
            auth-key를 사용할 수 없습니다.<br />
            <strong>Start API</strong>를 호출하지 않고
            <strong>Finish API</strong>를 호출하는 경우에는 401 Unauthorized를
            반환합니다.
          </p>

          <h4>request</h4>
          <div class="request">
            POST /finish<br />
            Authorization: {auth-key}<br />
            Content-Type: application/json
          </div>

          <h4>example</h4>
          <div class="request">
            curl -X POST {URL}/finish<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Authorization:
            {auth-key}'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type:
            application/json'<br />
          </div>
          <h4>response</h4>
          <div class="request">
            HTTP/1.1 200 OK<br />
            { <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"score": 1283<br />
            }
          </div>
          <!--          -->
        </template>
      </TextItem>
      <TextItem title="점수">
        <template v-slot:content>
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
        </template>
      </TextItem>
      <TextItem title="참고">
        <template v-slot:content>
          <ul>
            <li>각 시나리오의 총점은 모든 시도 중 최고 점수로 반영됩니다.</li>
          </ul>
        </template>
      </TextItem>
    </section>
  </main>
</template>

<script>
import ProblemHeader from '@/components/ProblemHeader';
import TextItem from '@/components/TextItem';
import PuzzlePractice from '@/components/PuzzlePractice';

export default {
  components: {
    ProblemHeader,
    TextItem,
    PuzzlePractice,
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
.request {
  background-color: #e9ecf3;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;

  font-size: 0.8rem;
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
ol {
  list-style-type: decimal;
  margin-left: 1rem;
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
strong {
  font-weight: bold;
}
</style>
