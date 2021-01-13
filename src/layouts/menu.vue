<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index">
      <MenuItem :name="item.path" :to="item.path" v-if="item.children.length == 0" @click.native="JumpRoute(item.path,item)">
        <Icon :type="item.icon" />
        {{item.title}}
      </MenuItem>
      <Submenu v-else :name="item.path">
          <template slot="title">
            <Icon :type="item.icon" />
            {{item.title}}
          </template>
          <div v-for="(child,idx) in item.children" :key="idx">
              <MenuItem :key="child.id" v-if="child.children.length == 0" :name="child.path" :to="child.path" @click.native="JumpRoute(child.path,item)">{{child.title}}</MenuItem>
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
  computed: {
    activeRoute() {
      return this.$route.path
    }
  },
  data() {
    return {

    }
  },
  methods: {
      JumpRoute(url,item) {
        this.getMenuName(item)
        if(this.$route.path == url) return;
        this.$router.push(url)
      },
      getMenuName(item) {
      }
  }
};
</script>

<style scoped>
</style>