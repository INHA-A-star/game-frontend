<template>
  <nav class="sub-nav">
    <ul class="sub-nav-list">
      <li class="sub-nav-item">
        <router-link to="/problem">API 문서</router-link>
      </li>
      <li class="sub-nav-item">
        <router-link to="/result">결과</router-link>
      </li>
      <li class="sub-nav-item">
        <router-link to="/rank">순위</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.sub-nav {
  width: 400px;
  text-align: center;
  margin-bottom: 1rem;
}
.sub-nav-list {
  display: flex;
}
.sub-nav-item:hover {
  width: 50%;
  background-color: cornflowerblue;
  font-weight: bold;
}
.sub-nav-item {
  flex-grow: 1;
  width: 33%;
  height: 100%;
  padding: 0.3rem;
  margin-right: 0.1rem;
  margin-bottom: 1rem;
  background-color: lightsteelblue;

  transition-duration: 0.5s;
}
.sub-nav-item a {
  display: block;
  padding: 0.4rem;
  text-decoration: none;
  color: black;
}
</style>
