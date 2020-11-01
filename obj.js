let array = ["りんご", "いちご", "なし", "りんご"]
let obj = {}
for (let i = 0; i < array.length; i++) {
    let key = array[i]
    if (obj[key] != undefined) {//オブジェクトの値が定義されていたら　　　　　何が定義されていない？
        console.log(array[i])   //値が表示される
        console.log("が重複しています")
    }
    else {                      //obj[key]（値）がundefinedだったら
        obj[key] = 1            //1を値に代入する
        //console.log(obj)
    }
}