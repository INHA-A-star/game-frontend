<template>
  <main class="main-container">
    <ProblemHeader />
    <h1 class="main-title">📊 결과</h1>
    <TestcaseResult
      v-for="(result, index) in testcaseResults"
      :key="index"
      :result="result.situations"
      :index="index"
    />
  </main>
</template>

<script>
import ProblemHeader from '@/components/ProblemHeader';
import TestcaseResult from '@/components/TestcaseResult';
import { saveAuthToCookie } from '@/utils/cookies';
import { getScenarios } from '@/api/scenario';
export default {
  components: {
    ProblemHeader,
    TestcaseResult,
  },
  created() {
    // userCommands에 대한 정보 서버로부터 받아오는 로직.

    // 테스트용 쿠키, 나중에 백엔드 수정되면 수정해야함.
    saveAuthToCookie(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aWQiOiI1N2FmZTAwMS03Zjk3LTRhYWYtYTI3Yy03ZDMxM2IwMGRkZmQiLCJpZCI6NTgsInVpZCI6IjgwOGJjYTI1LWNjNWItNDA4ZS1iOTg0LWMyOWZjMjZiN2ZhOSIsImV4cCI6MTY2NjEwNjc0Ni41OTI2NjYxfQ.39Tb6gZpMWl4c5aboPrVWDgduBijJ3DsoF1CrlEpxXs',
    );
    this.fetchScenarios();
  },
  data() {
    return {
      testcaseResults: [],
    };
  },
  methods: {
    async fetchScenarios() {
      try {
        const { data } = await getScenarios();
        this.testcaseResults = data;
        console.log(data[0].situations);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  padding: 3rem;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0 auto;
  width: 1024px;
  min-height: 74vh;
}
.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
