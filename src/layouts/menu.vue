<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index">
      <MenuItem :name="item.id" v-if="item.children.length == 0" @click.native="JumpRoute(item.path)">{{item.title}}</MenuItem>
      <Submenu v-else :name="item.id">
          <template slot="title">{{item.title}}</template>
          <div v-for="(child,idx) in item.children" :key="idx">
              <MenuItem :key="child.id" v-if="child.children.length == 0" :name="child.id" @click.native="JumpRoute(child.path)">{{child.title}}</MenuItem>
              <vmenu v-else :menuList="[child]" />
          </div>
      </Submenu> 
    </div>
  </div>
</template>

<script>
export default {
  name: "vmenu",
  props: {
    menuList: {
      type: Array,
    },
  },
  methods: {
      JumpRoute(url) {
        if(this.$route.path == url) return;
        this.$router.push(url)
      }
  }
};
</script>

<style scoped>
</style>