const arg1 = process.argv[2]//タテ
const arg2 = process.argv[3]//ヨコ

let str1 = "*"
let str2 = "-"

for (let i = 0; i < arg1; i++) {
    let arr = []
    for (let j= 0; j < arg2; j++) {
        if (i % 2 !== 0) {//奇数行のとき
            if (j % 2 !== 0) {//奇数番目
                arr.push(str1)
            } else {//偶数番目
                arr.push(str2)
            }
        } else {//偶数行のとき(奇数行以外のとき)
            if (j % 2 !== 0) {
                arr.push(str2)
            } else {
                arr.push(str1)
            }
        }
    }
    console.log(arr.join(' '))
}

// for (let i = 0; i < arg1; i++) {
//     let str = ""
//     for (let j= 0; j < arg2; j++) {
//         if (i % 2 !== 0) {
//             if (j % 2 !== 0) {
//                 str += str1
//             } else {
//                 str += str2
//             }
//         } else {
//             if (j % 2 !== 0) {
//                 str += str2
//             } else {
//                 str += str1
//             }
//         }
//     }
//     console.log(str)
// }