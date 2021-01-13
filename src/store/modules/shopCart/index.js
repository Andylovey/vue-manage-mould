export default {
    namespaced: true,
    state: {
        shop: {}
    },
    // state 中的数据如不需要计算处理的话 则一般可无需使用 getters
    getters:{
        getshop: state => {
            return state.shop
        }
    },
    mutations: {
        addShop(state,k) {
            state.shop = k
        }
    },
    actions: {
        addShopAsync({commit}) {
            setTimeout(() => {
                commit('addShop',{
                    id: 1,
                    shopName: '苹果12',
                    shopLarge: '128G',
                    shopPrice: '4999'
                })
            },3000)
        }
    }
}