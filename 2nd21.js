const argv = []
for (let i = 2; i < process.argv.length; i++) {
    argv.push(Number(process.argv[i]))
}
//console.log(argv)

function min(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < max) {
            max = array[i]
        }
    }
    return max
}
console.log(min(argv))


