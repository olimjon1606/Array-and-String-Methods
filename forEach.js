// // const letter = ['a','d','s','f','h','y','d','a'];

// // let count= {}
// // letter.forEach(item => {
// //     if(count[item]){
// //         count[item]++;
// //     }else{
// //         count[item] = 1;
// //     }
// // })

// // console.log(count)

// const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const double = n.map((value, index, arr) => {
//     return value * 2
// })

// console.log(double)

// // Map 
// const products = [
//     {
//         name: ' laptop',
//         price: 1000,
//         count: 5
//     },
//     {
//         name: ' desktop',
//         price: 1500,
//         count: 3
//     },
//     {
//         name: 'phone',
//         price: 800,
//         count: 10
//     }
// ]

// const totalProductValue = products.map(item => item.price * item.count)
// console.log(totalProductValue)

// // filter array 

// let numbers = [1, 2, 100, 3, 4, 5]
// const even = numbers.filter(isEven);

// function isEven(value) {
//     return value % 2 === 0
// }
// console.log(even)

// // reduce array 
// const total = numbers.reduce(sum, 0)
// function sum(accumulator, value) {
//     return accumulator + value
// }
// console.log(total)

// const max = numbers.reduce(callBack, -Infinity)

// function callBack(accumulator, value) {
//     if (accumulator > value) {
//         return accumulator
//     } else {
//         return value
//     }

// }
// console.log(max)

// // slice array 

// const number2 = numbers.slice(3)
// console.log(number2)


// // splice array 

// numbers.splice(2, 3)

// // sorting 

// const ns = [23, 34, 1, 4, 364, 35, 556, 67, 3]
// ns.sort(compare)
// function compare(a, b) {
//     return a - b;
// }
// console.log(ns)


// // concat array 
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// const d = [7, 8, 9]

// const c = a.concat(b)
// console.log(c)
// const f = a.concat(b,d,c)
// console.log(f)



// const letters = ['a', 'b', 'c', 'd', 'e', 'f']
// function log(element, index) {
//     console.log(this)
// }
// const obj = {
//     name: 'value'
// }
// letters.forEach(log, obj)


// string 
const string = "Hello, world!"
console.log(string.length)
console.log(string.charAt(6))
console.log(string.indexOf("hello",5))