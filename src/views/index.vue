<template>
  <div>首页</div>
</template>

<script>
import { bkData } from "@/mock/homeData.js";
import { getData } from "@/api/api.js";
export default {
  name: "index",
  created() {
    bkData().then((res) => {
      console.log(res);
    });

    getData().then(res => {
      console.log('r',res)
    })
  },
};
</script>

<style scoped>
</style>