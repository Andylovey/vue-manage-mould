// export const getLst = function (k) {
//     return window.localStorage.getItem(k)
// }

// export const setLst = function (k,v) {
//     window.localStorage.setItem(k,v)
// }

export default {
    getLst(k) {
        return window.localStorage.getItem(k)
    },
    setLst(k, v) {
        window.localStorage.setItem(k,v)
    },
    clearLst() {
        console.log('aaaa')
        window.localStorage.clear()
    }
}