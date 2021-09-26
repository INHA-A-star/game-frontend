<template>
  <div class="main-container">
    <div class="grid-container">
      <section class="section">
        <div class="title">
          <hgroup>
            <h1>A *</h1>
            <h2>The Competitive Heuristic Algorithm Contest</h2>
          </hgroup>
          <router-link to="/guide" class="start-btn">Get Started</router-link>
          <!--        <button id="btn" type="button" @click="startContest">Get Started</button>-->
        </div>
        <BackgroundItem
          v-for="(imgValue, index) in randomImgValues"
          :key="index"
          :randomImgValue="imgValue"
          :randomAniValue="randomAniValues[index]"
          :index="index"
        >
        </BackgroundItem>
      </section>
      <div
        ref="abc"
        style="width: 100px; height: 100px; background-size: cover"
      ></div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import BackgroundItem from '@/components/BackgroundItem';
import AppFooter from '@/components/common/AppFooter';
export default {
  created() {
    for (let i = 0; i < 240; i++) {
      let randomImgValue = Math.ceil(Math.random() * 4);
      let randomAniValue = Math.ceil(Math.random() * 3);

      this.randomImgValues.push(randomImgValue);
      this.randomAniValues.push(randomAniValue);
    }
  },
  components: {
    BackgroundItem,
    AppFooter,
  },
  data() {
    return {
      randomImgValues: [],
      randomAniValues: [],
    };
  },
};
</script>

<style scoped>
.grid-container {
  height: calc(100vh - 160px);
  overflow: hidden;
}
.section {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(26, 1fr);
  height: 100%;

  background-color: rgba(0, 0, 0, 0.9);
}
.title {
  grid-row: 4 / 7;
  grid-column: 10 / 18;
  justify-self: center;
  align-self: center;
  text-align: center;
}
.title h1 {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #4233ee, #fe8d29);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title h2 {
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;

  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.start-btn {
  display: inline-block;
  background-color: white;
  text-decoration: none;

  border: 0;
  border-radius: 0.3rem;
  padding: 1rem;

  color: black;
  font-size: 1.1rem;
  font-weight: bold;

  transition-duration: 0.5s;
  animation: ani-button 0.8s infinite alternate;
}
.start-btn:hover {
  background-color: darkgray;
}
@keyframes ani-button {
  100% {
    transform: scale(1.15);
  }
}
</style>
