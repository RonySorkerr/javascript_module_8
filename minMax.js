// const numbers = [1, 8, 8, 5, 8, 5, 89, 5, 8];
// const nums = [];
// for(number of numbers){
//     console.log(number)
// }
// const max = Math.max(nums);
// console.log('max is : ' , max);
const min = Math.min(5, 85, 8, 5, 8, 2, 8, 5);
// console.log(min);

// const max = Math.max(4,5,8,56,9,3,5,2,58);
// console.log(max)

// console.log(Math.PI);

// console.log(Math.abs(89-99)) // it makes the negative value to positive

// console.log(Math.round(2.7)); // rounds make the floating number as a integer to the closest point.
// console.log(Math.round(2.3));

// console.log(Math.floor(2.5)); //Floor remove the numbers after decimal
// console.log(Math.ceil(2.5)); //ceil goes to the top of the number. even it is .0001 
// console.log(Math.ceil(1.001));


// console.log(Math.random());  // it returns with float but if we need an integer that we can do>>>>>>>>>>>>>>

const rand = Math.round(Math.random()*15); // we could use floor, ceil but using round instead of these is a better option. cause, we can almost get the correct number we need.
console.log(rand);