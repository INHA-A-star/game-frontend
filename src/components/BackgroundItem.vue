<template>
  <div
    class="bg-item"
    :style="{
      backgroundImage:
        !this.isHidden &&
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
          require(`@/images/bg-item-${randomImgValue}.png`) +
          ')',
      animationName: `ani-${randomAniValue}`,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    randomImgValue: {
      type: Number,
      required: true,
    },
    randomAniValue: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  created() {
    let row = this.index / 26;
    let col = this.index % 26;

    this.isHidden = row >= 2 && row <= 6 && col >= 8 && col <= 17;
  },
  data() {
    return {
      isHidden: false,
    };
  },
  computed: {},
};
</script>
<style>
.bg-item {
  background-size: cover;
  opacity: 0;
  animation: 10s alternate infinite;
}
@keyframes ani-1 {
  0% {
    opacity: 0.1;
  }
  33% {
    opacity: 0;
  }
}
@keyframes ani-2 {
  20% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  66% {
    opacity: 0;
  }
}
@keyframes ani-3 {
  60% {
    opacity: 0;
  }
  82% {
    opacity: 0.1;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
