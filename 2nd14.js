const kobe = require("./kobe2.json");
//console.log(kobe)

// for (let key of Object.keys(kobe)) {
//     if (key === "kobe") {
//         console.log(kobe.key)
//     }
//     console.log(key)//pwpcが返る
// }
// console.log(typeof kobe[kobe])


//{ pwpc: { lcxo: { hree: [Object] } } } 　　キーではなく、値をみるとオブジェクト型になっている
//  しかし、kobeがキーのときは、値はstring型

function getKobe(obj) {
    let objKey = Object.keys(obj)

    for (let key of objKey) {
        if (key === "kobe") {
            console.log(obj[key])
        }    

        if (typeof obj[key] === "object") {　//値がオブジェクト型である限り
            getKobe(obj[key])　//kobe.jsonの値をまわし続けて行く
        }
    }
}
getKobe(kobe)
