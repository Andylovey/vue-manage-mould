<template>
  <Button @click="handleAddShopCart">加入购物车--vuex</Button>
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

    getData({
      uid: 501749963617992704
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    handleAddShopCart() {
      this.$store.dispatch({
        type: 'addShopAsync'
      })
    }
  }
};
</script>

<style scoped>
</style>