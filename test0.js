let list = [57,58,59]

function time(sec) {
    console.log(`${60-sec}秒`)
}

//function count() {
    let arr = []
    for (let i = 0; i < list.length; i++) {
        arr.push(list[i]*1000)
        setTimeout(time, arr[i], list[i])
    }
//}

// setTimeout(count, 1500)

// //setTimeout(コールバック関数, 経過時間, コールバックに渡す引数) ＜－ 最後の呼び出し
// const seclist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //コールバック関数
// function call(sec) {
//     console.log(`あと${60-sec}秒です。`)
// }

// //コールバックを呼ぶ関数
// function startMyTimer(list, callback) {
//     //listのときにcallbackを返す処理を書いていく
//     let array = []                //秒数を入れる配列を作りたい
//     for (let i = 0; i < list.length-1; i++) {
//         array.push(list[i+1] * 1000)  //まずはarray[0]に list[i+1] * 1000 を入れる
//         //callback(array[i])
//         //↓第一引数にコールバック関数（共通しとる）、第二引数に時間が入ったarray、第三引数にlistの中身
//         //console.log(array[i])
//         setTimeout(callback, array[i], list[i+1])
//     }
// }
// startMyTimer(seclist, call)