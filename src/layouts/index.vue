<template>
    <div class="layout">
        <Layout>
            <v-header />
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu theme="light" width="auto">
                        <v-menu :menuList="menuRes" /> 
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
import vHeader from '@/layouts/header';
import vMenu from '@/layouts/menu';
import {menuData} from '@/mock/menu.js';
export default {
    components: {
        vHeader,
        vMenu
    },
    data() {
        return {
            menuRes: []
        }
    },
    created() {
        menuData().then(res => {
            console.log(res)
           this.menuRes = res
        })
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