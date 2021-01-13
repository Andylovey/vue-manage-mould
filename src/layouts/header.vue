<template>
  <div class="flex_end layout_header">
    <Dropdown trigger="click" style="margin-left: 20px">
      <a href="javascript:void(0)">
        <!-- {{$lst.getLst('user')}} -->
        <Avatar :src="require('@/assets/avatar.gif')" />
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem @click.native="handleLogout">退出登录</DropdownItem>
        <DropdownItem>账户信息</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
    methods: {
        handleLogout() {
            this.$lst.clearLst()
            this.$router.go(0)
        }
    }
};
</script>

<style scoped>
.layout_header {
    padding: 0 20px;
}
</style>