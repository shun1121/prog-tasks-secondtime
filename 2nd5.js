const number = process.argv[2]
function pyramid(num) {
    let arr = []
    let connect
    let type1 = " "
    let type2 = "*"
    for (let i = 0; i < num; i++) {
        arr = []
        connect = type1.repeat(num-1-i*1) + type2.repeat(i*2+1)
        arr.push(connect)
        console.log(arr.join)
        //return arr//.join(' ')
    }
    //return arr.join(' ')
}

console.log(pyramid(number))

// const number = process.argv[2]
// let arr = []
// let connect
// let type1 = " "
// let type2 = "*"
// for (let i = 0; i < number; i++) {
//     arr = []
//     connect = type1.repeat(number-1-i*1) + type2.repeat(i*2+1)
//     arr.push(connect)
//     console.log(arr.join())
// }

// const number = process.argv[2]
// let connect = ""
// let type1 = " "
// let type2 = "*"
// for (let i = 0; i < number; i++) {
//     connect = ""　//初期化する
//     connect += type1.repeat(number-1-i*1) + type2.repeat(i*2+1) //白がnumber-1-i*1個、＊がi*2+1個
//     console.log(connect)　//足したやつをくっつけて一回一回出力する
// }
