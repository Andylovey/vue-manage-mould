import Vue from 'vue';
import Vuex from 'vuex';
import shopCart from './modules/shopCart'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        shopCart,
    }
})

export default store;