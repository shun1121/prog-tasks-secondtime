const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let arr = []
let arr1 = []
let cnt = 0
let cnt1 = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] === "る") {
        arr.push(str[i-2] + str[i-1] + str[i])
    } else if (str[i] === "こ") {
        arr1.push(str[i-2] + str[i-1] + str[i])
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "こはる") {
        cnt++
    }
}
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === "はるこ") {
        cnt1++
    }
}
console.log(`こはる：${cnt}`)
console.log(`はるこ：${cnt1}`)