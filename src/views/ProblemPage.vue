<template>
  <main class="main-container">
    <ProblemHeader></ProblemHeader>
    <ApiPage></ApiPage>
  </main>
</template>

<script>
import ProblemHeader from '@/components/problems/ProblemHeader';
import ApiPage from '@/views/ApiPage';
export default {
  components: {
    ProblemHeader,
    ApiPage,
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
</style>
