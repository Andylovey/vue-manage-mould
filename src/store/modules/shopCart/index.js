export default {
    state: {
        shop: {}
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