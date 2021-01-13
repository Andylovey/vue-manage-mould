<template>
  <div>
    <Button @click="handleAddShopCart">加入购物车--vuex</Button>
    <p v-if="Object.keys(getshop).length">{{ getshop }}</p>
  </div>
</template>

<script>
import { bkData } from "@/mock/homeData.js";
import { getData } from "@/api/api.js";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "index",
  computed: {
    ...mapGetters("shopCart", ["getshop"]),
  },
  created() {
    bkData().then((res) => {
      console.log(res);
    });

    getData({
      uid: 501749963617992704,
    }).then((res) => {
      console.log(res);
    });
  },
  methods: {
    ...mapActions("shopCart", ["addShopAsync"]),
    handleAddShopCart() {
      this.addShopAsync();
    }
  },
};
</script>

<style scoped>
</style>