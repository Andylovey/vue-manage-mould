<template>
    <div class="layout">
        <Layout>
            <v-header />
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu theme="light" width="auto" :active-name="$route.path" :open-names="openName" v-if="menuRes.length != 0">
                        <v-menu :menuList="menuRes"/> 
                    </Menu>
                </Sider>
                <Content>
                    <div class="layout-content">
                        <router-view/>
                    </div>
                </Content>
            </Layout> 
        </Layout>
    </div>
</template>
<script>
import VHeader from '@/layouts/header';
import VMenu from '@/layouts/menu';
import {menuData} from '@/mock/menu.js';
export default {
    components: {
        VHeader,
        VMenu
    },
    data() {
        return {
            menuRes: [],
            openName: []
        }
    },
    created() {
        menuData().then(res => {
           this.menuRes = res;
           /**
            * 遍历后端返回来的菜单栏进行递归 根据当前页面路由与后端返回来的路由配对而展开对应的菜单
            */
            this.getOpenNames(res)
        })
    },
    methods: {
        getOpenNames(list) {
            list.forEach(item => {
                if(this.$route.path.includes(item.path)) {
                    this.openName.push(item.path)
                    if(item.children && item.children.length != 0) {
                         this.getOpenNames(item.children)
                    } 
                }
            })
        }
    }
};
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100vh;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-content {
    width: 100%;
    height: 100%;
    padding: 24px;
    overflow: auto;
}
</style>