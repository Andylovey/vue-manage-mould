export const bkData = function () {
    return new Promise((resolove,reject) => {
        setTimeout(() => {
            resolove('特雷西麦克格雷迪')
        },3000)
    })
}