const arg = process.argv.slice(2)

function find(array, callback) {
    let result = undefined   //あらかじめundefinedを定義しておく   配列を作らない
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {  //配列の要素を一つずつ評価関数にかけていく　trueなら
            result = array[i]　　//resultにその値を代入する　多分string型
            //console.log(typeof result)
            break
        } 
    }
    return result//.join()
}

const eval = function (num) {
    if (num <= 20) {
        return true
    }
    return false
}

console.log(find(arg, eval))


//当てはまるものが来たら返すタイプの問題は最初に初期値を入れておく。当てはまるものが来たら値を代入する。
