// const users = require("./users2.json")

// const duplicate = function (search, array) {//重複があればカウントを増やし、配列に入れる関数
//     let cnt = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === search) {
//             cnt++
//         }
//     }
//     return cnt
// }

// let first = []  //ファーストネームの配列
// for (let h = 0; h < users.length; h++) {
//     first.push(users[h].name.split(' ')[1])
// }

// let firstName = []  //重複をのぞいたファーストネームの配列
// for (let j = 0; j < users.length; j++) {
//     if (firstName.indexOf(first[j]) === -1) {
//         firstName.push(first[j])
//     }
// }

// //一番下にあるfor文はsortができていないもの
// //その状態からはどうしても動かない
// //console.log()の中のものをオブジェクト型の配列に入れる必要がある
// //そうすることでsortができ、for ofで表示もできる
// let arr = []
// for(let u = 0; u < firstName.length; u++) {
//     // let obj1 = {}
//     // obj1.name = firstName[u]
//     // obj1.count = duplicate(firstName[u], first)  
//     arr.push({"name":firstName[u],"count":duplicate(firstName[u], first)}) //オブジェクトをそのままぶちこむ
//     arr.sort((a,b) => b.count - a.count)
// }
// console.log(arr)

// for (let element of arr) {
//     console.log(`${element.name} : ${element.count}`)
// }






const users = require("./users2.json")
const result = []
for (let i = 0; i < users.length; i++) {
    const user = users[i]  //usersのすべての要素
    const firstName = user.name.split(" ")[1]  //すべてのファーストネーム
    //console.log(firstName) 
    //なんでここでresult? ↓        ↓ これはオブジェクトの名前に当たる ー＞ users
    let index = result.findIndex((r) => r.firstName === firstName) //rは査定されるものー＞最終的にオブジェクト型の配列にしたいから、その配列の要素
    //result配列の中の要素であるオブジェクト、その中のfirstNameキーの値を配列のfirstNameキーと比較
    // ↑ 配列内の指定されたテスト関数を満たす最初の要素の位置を返します。
    //テスト関数を満たす要素がない場合を含め、それ以外の場合は -1 を返します。
    //console.log(firstName)//ファーストネーム
    //console.log(index) //数字(findindexで当てはまればその位置、当てはまらなければ-1)、number型
    
    // ↓１周目は何も入っていない状態だからまずプッシュされる。　
    if (index < 0) { //resultに重複する値がなければ
        result.push({
            firstName: firstName,
            count: 1
        })
    } else {
        result[index].count++; //＜－[index]なに？  オブジェクトがた配列resultのcountキーの値が++される。
    }   //↑のindexはr.firstNameがfirstNamと一致する位置を返す。なければ－１。つまりインデックス番号
}
result.sort((a, b) => b.count - a.count)
for (r of result) {
    console.log(`${r.firstName}:${r.count}`)
}