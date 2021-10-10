<template>
  <div class="text-item">
    <h2 class="title">{{ title }}</h2>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.text-item {
  padding: 2rem;
}
.title {
  margin-bottom: 1rem;

  color: slategrey;
  font-size: 1.5rem;
  font-weight: bold;
}
.api {
  display: inline-block;
  padding: 0.7rem;
  background-color: rgba(135, 131, 120, 0.15);
  color: #eb5757;
}
.highlighter {
  padding: 0.2rem 0.5rem;
  background-color: rgba(135, 131, 120, 0.15);
  color: #eb5757;
}
.emphasize {
  color: #905;
}
p {
  line-height: 2rem;
}
li {
  list-style: disc;
  line-height: 2rem;
  margin-left: 2rem;
}
h3 {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1.5rem 0;
}
h4 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1.5rem 0;
}
</style>
