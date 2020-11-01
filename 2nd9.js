const arg1 = process.argv[2]
const arg2 = process.argv[3]
//console.log(arg2)
let arr = arg1.toLowerCase().split(',')
//console.log(arr)

let array = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(arg2) !== -1) {
        array.push(arr[i])
        array.sort()
    }
}
console.log(array.join(' '))





