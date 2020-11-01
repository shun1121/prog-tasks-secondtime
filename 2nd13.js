const playdata = require("./playdata2.json")
const songs = require("./songs2.json")

let arr = playdata.data
let arr1 = songs.songs
//console.log(arr)  //これは配列
//console.log(playdata) //これはオブジェクト
arr.sort(function(a,b) {return b.count - a.count})
//console.log(arr)

for (let i = 0; i < arr.length; i++) { //playdata.lengthは配列じゃないから数かぞえられない
    for (let j = 0; j < arr.length; j++) {
        if (arr[i].id === arr1[j].id.toString()) {
            console.log(`${i}位:${arr1[j].title} ${arr[i].count}`)
        }
    }
}
