function change(money) {
    let hundred = Math.floor(money/100)
    let ten = Math.floor((money-hundred*100)/10)
    let one = Math.floor((money-hundred*100-ten*10)/1)
    return `100円玉${hundred}枚, 10円玉${ten}枚, 1円玉${one}`
}
const number = Number(process.argv[2])
console.log(change(number))

