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

