let nums = []
for (let i = 1; i <= 50; i++) {
    nums.push(i)
}
// console.log(nums)

function check(num) {
    if (num % 3 === 0 || num.toString().indexOf("3") >= 0) {
        return true
    } else {
        return false
    }
} 

function timesThree(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push("wow")
        } else {
            result.push(i+1)//一つずつ数字が小さかった。だからiに１を足して調整する
        }
    }
    return result
}

console.log(timesThree(nums, check))
