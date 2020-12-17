<template>
  <div id="app">
    <v-layout />   
  </div>
</template>

<script>
import VLayout from '@/layouts/index.vue'
export default {
  name: 'App',
  components: {
    VLayout
  }
}
</script>

<style>
.ivu-layout {
  height: 100%;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
