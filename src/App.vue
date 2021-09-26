<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import './css/reset.css';
body {
  overflow-x: hidden;
}
</style>
