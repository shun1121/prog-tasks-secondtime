const workers = require( "./workers2.json" );

const a = 3000
const a1 = 100000
const a2 = 120000
const b = 4000
const b1 = 140000
const c = 5000
const c1 = 160000

for (let users of workers.users) {
    if (users.rank === "A" && users.years < 5) {
        users.salary = a * users.years + a1
    } else if (users.rank === "A") {
        users.salary = a * users.years + a2
    } else if (users.rank === "B") {
        users.salary = b * users.years + b1
    } else {
        users.salary = c * users.years + c1
    }
    // let arr = []
    // arr.push(users)
    // //console.log(arr)
    // arr.sort(function(a,b) {return b.salary - a.salary})
    // console.log(`${users.name}:${users.salary}`)
}

let arr = workers.users //これはすでに配列になっているから、新たに配列を作ってプッシュしなくていい
//console.log(arr)
for (let i = 0; i < arr.length; i++) {
    arr.sort(function(a,b) {return b.salary-a.salary})
    console.log(`${arr[i].name}:${arr[i].salary}`)
}
