<template>
  <main class="main-container">
    <h1 class="main-title">📖 대회 가이드</h1>
    <section class="main-section">
      <div class="guide">
        <h2 class="sub-title">시작하기 전에</h2>
        <p>
          OOO님, 안녕하세요.<br />
          이 테스트는 120분간 진행됩니다.<br />
          테스트를 시작하기 전 아래 안내 사항을 숙지해주세요.
        </p>
      </div>
      <div class="guide">
        <h2 class="sub-title">안내 사항</h2>
        <ol class="detail">
          <li>
            <p>
              테스트를 시작하면 멈출 수 없으며 120분 안에 문제를 풀어야 합니다.
            </p>
          </li>
          <li>
            <p>
              REST API에 대한 기본적인 지식이 요구됩니다.<br />
              REST API에 대해 잘 모르겠다면 아래 링크로 이동해보세요!<br />
              <a href="#">https://rest-api.com</a> (REST API에 대한 설명 글
              링크하기)
            </p>
          </li>
          <li>
            <p>
              'API 문서'란을 통해 해결해야할 문제와 사용할 수 있는 API가
              제공됩니다.
            </p>
          </li>
          <li>
            <p>
              '결과'란에서 가장 최근 보낸 문제 풀이 결과에 대한 피드백을
              제공합니다. (시각화)
            </p>
          </li>
          <li>
            <p>'순위'란에서 상위 10등까지의 점수를 확인할 수 있습니다.</p>
          </li>
        </ol>
      </div>
    </section>
    <div class="main-footer">
      <router-link to="/problem" class="start-btn">대회 시작하기</router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  padding: 3rem;
  font-family: 'Noto Sans KR', sans-serif;
}
.main-title {
  font-size: 3rem;
  font-weight: bold;
}
.sub-title {
  color: slategrey;
  font-size: 1.5rem;
  font-weight: bold;

  margin-bottom: 1rem;
}
.main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 65vh;
  margin: 1.5rem 0;
  padding: 2rem;
}
.main-text p {
  line-height: 2rem;
}
.main-text hr {
  margin: 3rem 0;
}
.main-text ol {
  list-style-type: decimal;
  margin-left: 2rem;
}
.main-footer {
  text-align: center;
}
.main-container {
  width: 1000px;
  margin: 0 auto;
}
.main-section {
  border: 1px solid darkgray;
}
.guide {
  width: 100%;
  line-height: 2;
}
.detail {
  list-style: decimal;
  margin-left: 1rem;
}
.detail li {
}
.start-btn {
  display: inline-block;
  text-decoration: none;
  background-color: lightsteelblue;

  border: 0;
  border-radius: 0.3rem;
  padding: 1rem;

  color: white;
  font-size: 1.3rem;
  font-weight: bold;

  transition-duration: 0.3s;
}
.start-btn:hover {
  transform: scale(1.1);
}

/*레이아웃용*/
/*.main-container {*/
/*  border: 3px solid red;*/
/*}*/
/*.main-section {*/
/*  border: 2px solid cyan;*/
/*}*/
/*.main-title {*/
/*  border: 1px solid blue;*/
/*}*/
/*.main-footer {*/
/*  border: 1px solid green;*/
/*}*/
</style>
