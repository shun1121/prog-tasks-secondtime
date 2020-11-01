const arg1 = Number(process.argv[2])
const arg2 = Number(process.argv[3])
// 整数を返す割り算関数
function division(num, div) {
    for (let i = 0; i < num; i++) {
        if (num < div*i) {  //割られる数が、割る数 × 変数の結果を超えたら
            return i-1
        }
    }
} 

// 剰余を返す関数
function remainder(num, div) {
    let result = ""
    for (let i = 0; i < num; i++) {
        if (num < div*i) {  //割られる数が、割る数 × 変数の結果を超えたら
            result = i-1
            break
        }
    }
    return num - div*result
}
console.log(`${arg1}÷${arg2} = ${division(arg1, arg2)}余り${remainder(arg1, arg2)}`)
