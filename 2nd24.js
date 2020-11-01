const rect = [
    [11, 1, 8],
    [7, 5, 10],
    [2, 9, 4],
    [3, 6, 12],
]

function tate(arr) {
    let result = []
    //let sum = 0 //ここにsum = 0を置いておくとiが２周目のとき、元の値が23になってしまう
    for (let i = 0; i < arr[0].length; i++) {
        let sum = 0
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j][i]
            //どうやってたすの？
        }
        result.push(sum)
    }
    return result
}

rect.push(tate(rect)) //先にrectにプッシュして配列の要素数を増やしておく

function yoko(arr) {
    //let result = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
        arr[i].push(sum)
    }
    return arr
}
console.log(yoko(rect))


