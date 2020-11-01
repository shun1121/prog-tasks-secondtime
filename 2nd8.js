let arr = [Math.floor(Math.random()*10)]
for (let i = 0; i < 10; i++) {
    //let arr = [Math.floor(Math.random()*10)]
    if (arr.indexOf(i) === -1) {
        arr.push(i)
    }
    //console.log(arr)
}
console.log(arr.join(''))

