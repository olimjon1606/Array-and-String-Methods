// const letter = ['a','d','s','f','h','y','d','a'];

// let count= {}
// letter.forEach(item => {
//     if(count[item]){
//         count[item]++;
//     }else{
//         count[item] = 1;
//     }
// })

// console.log(count)

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const double = n.map((value, index, arr) => {
    return value * 2
})

console.log(double)

// Map 
const products = [
    {
        name: ' laptop',
        price: 1000,
        count: 5
    },
    {
        name: ' desktop',
        price: 1500,
        count: 3
    },
    {
        name: 'phone',
        price: 800,
        count: 10
    }
]

const totalProductValue = products.map(item => item.price * item.count)
console.log(totalProductValue)

// filter array 

let numbers = [1, 2, 3, 4, 5]
const even = numbers.filter(isEven);

function isEven(value) {
    return value % 2 === 0
}
console.log(even)

// reduce array 
const total = numbers.reduce(sum, 0)
function sum(accumulator, value) {
    return accumulator + value
}
console.log(total)