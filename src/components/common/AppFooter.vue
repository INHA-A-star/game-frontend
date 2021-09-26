<template>
  <footer class="footer">
    <div class="footer-text">Copyright © 2021 – A *</div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
/* 레이아웃용*/
/*.footer {*/
/*  border: 1px solid red;*/
/*}*/
/*.footer-text {*/
/*  border: 1px solid blue;*/
/*}*/
/**/

.footer {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;

  background-color: rgba(0, 0, 0, 0.9);

  color: darkgray;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
