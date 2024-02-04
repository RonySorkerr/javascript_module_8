// //duplicate elements
// // const numbers = [5,6,8.3,8.6,4.9,6,64];

// function isThere(array){
//     const unique = [] // a new empty array
//     for(const item of array){
//         if(unique.includes(item) === false){
//             unique.push(item);
//             console.log('items',  item);
//         }
//     }
//     return unique;
// }

// const array = [5,9,9,9,6,3,5,5,2,58,5,8,5,8,6,48,55,6,96,55,645,6,6,645]
// const newArray = isThere(array);
// console.log(newArray);

//DELETING DUPLICATES FROM AN ARRAY WITH FUNCITON
function duplicate(array) {
    // console.log(array)
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item)
        }
    }
    return unique;
}
const numbers = [5, 54, 98, 2, 8, 5, 8, 2, 8, 5, 8];
const array = ['rakib', 'jamal', 'jahid', 'fardin', 'nabil', 'rakib', 'jahid', 'fardin'];
const newarray = duplicate(array)
const newarrayNumbers = duplicate(numbers)
console.log(newarray);
console.log(newarrayNumbers);