const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
let scores = []
for (let i = 0; i < students.length; i++) {
    scores.push(Math.floor(students[i]/10))
}
//console.log(scores)

function duplicate(array, search) {
    let cnt = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search) {
            cnt++
        }
    }
    return cnt
}

let arr = []　//scoresで何点台に何人という人数を出したい　０～１０まで
for (let i = 0; i < 11; i++) {
    const result = duplicate(scores, i) //10の位で０～１０の数と重複があればcnt++を返す
    arr.push(result)
    //console.log(arr)
}


const max = Math.max(...arr) //arr配列の中の最大値が高さになる　＜－　分布表の高さ

for (let i = 0; i < max; i++) {//タテ（高さ）
    let result = []
    for (let j = 0; j < arr.length; j++) {//ヨコ
        if (arr[j] >= max-i) { //"*"が入るときは、上で作った配列arrでその数字以上のとき
            result.push("* ")
        } else {
            result.push("  ")　//それ以外は空欄"  "を入れておく
        }
    }
    console.log(result.join(' '))
}

console.log("---------------------------------")
console.log(" 0 10 20 30 40 50 60 70 80 90 100")










// let arr1 = []
// for (let j = 0; j < scores.length; j++) {
//     arr1.push(duplicate(scores, scores[j]))
//     //console.log(duplicate(scores, scores[j]))
// }
// console.log(arr1)

// let arr = []　//scoresで何点台に何人という人数を出したい　０～１０まで
// for (let k = 0; k < 11; k++) {
//     //if (duplicate(scores, k)) {
//         //cnt++
//     const result = duplicate(scores, k)
//     arr.push(result)
//     //}
// }
// console.log(arr)