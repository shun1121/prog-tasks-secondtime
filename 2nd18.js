const arg = process.argv.slice(2)

function unique(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i])
        }
    }
    return result
}

console.log(unique(arg))

