// 左に回転する関数
function rotate(arr) {
    let result = []
    for (let i = 0; i < arr[0].length; i++) {//4
        let array = []
        for (let j = 0; j < arr.length; j++) {//3
            array.push(arr[j][arr[0].length-1-i])
        }
        result.push(array)
    }
    return result
}
//数字が速く回るか遅く回るか、ということによってforの範囲を決める
//内側のforが速く回るー＞タテに取っていきたいから、３回まわしたいー＞rect配列の要素数のぶん

const rect = [
    [6, 1, 8, 2],
    [7, 5, 3, 4],
    [2, 9, 4, 1],
]
let r = rect
for (let i = 0; i < 5; i++) {
    console.log("---")  　　　　//まず"---"を表示する
    for (let j = 0; j < r.length; j++) { //r（rect）の要素数（３）だけ回す
        console.log(r[j])　　　　　　　　 //rect配列を上から（０から）表示していく
    }                                  　//まず、デフォルトのrectが表示される
    r = rotate(r)                        //一周目は最初のrectを回転させる
}　　　　　　　　　　　　　　　　　　　　　　//二周目のrはrectが一回回転した後の状態 ＜－ r = rotate(r)

// for (let i = 0; i < arr.length; i++) {//３
//     let array = []
//     for (let j = 0; j < arr[0].length; j++) {//４
//         array.push(arr[i][arr[0].length-1-j])     数字はあっているけど内側のforが先に回るから変になる
//     }
//     result.push(array)
// }
//console.log(rotate(rect))