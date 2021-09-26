<template>
  <div class="not-found">
    <header class="header">
      <router-link to="/" class="link">Astar</router-link>
    </header>
    <div class="not-found-text">
      <h1 class="title">해당 페이지를 찾지 못했습니다. 😂</h1>
      <p>
        방문하시려는 페이지의 주소가 잘못 입력되었거나,<br />
        페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
      </p>
      <router-link to="/" class="link">➥ 홈으로 가기</router-link>
      <div class="cat-image"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: bold;
  width: 100vw;
  height: 80px;
}
.link {
  text-decoration: none;
  color: black;
}
.not-found {
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.not-found-text {
  width: 1000px;
  margin: 0 auto;

  text-align: center;
  font-size: 1.3rem;

  padding: 3rem;
}
.not-found-text p {
  line-height: 1.5;
}
.cat-image {
  width: 500px;
  height: 500px;
  background-image: url(../images/not-found-cat.gif);
  background-size: cover;

  margin: 3rem auto;
}
</style>
