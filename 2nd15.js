const arg = process.argv.slice(2)
//console.log(arg)

const eval = function (num) { //評価関数は定義しておく ー＞ const ??? = function () {}
    if (num >= 10 && num <= 30) {
        return true
    }
    return false
}

function filter(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i])
        }
    }
    return result
}
const result = filter(arg, eval)
console.log(result)
