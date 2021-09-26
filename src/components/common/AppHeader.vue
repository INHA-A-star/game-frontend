<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">Astar</router-link>
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/guide" class="nav-link">Guide</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/problem" class="nav-link">Problem</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
/* 레이아웃용 */
/*.header {*/
/*  border: 1px solid red;*/
/*}*/
/*.header .nav-list {*/
/*  border: 1px solid green;*/
/*}*/
/**/

.header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;

  height: 80px;

  background-color: rgba(0, 0, 0, 0.9);
}
.header .logo {
  grid-column: 2;
}
.header .logo-link {
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}
.header .nav {
  grid-column: 5;
}
.header .nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .nav-item {
  font-weight: bold;
  margin-right: 2rem;

  transition-duration: 0.3s;
}
.header .nav-item:hover {
  transform: scale(1.5);
}
.header .nav-link {
  color: white;
  text-decoration: none;
}
</style>
