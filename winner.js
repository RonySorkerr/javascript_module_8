// i have a list of names. They have cut a lottery. I want to announce the winner. Now, here is the code of javascript of how to execute it in a manner.
// const customers = ['rakib', 'kamal', 'jamal', 'rahim', 'kari', 'fatima', 'jamila', 'solimolla', 'rahima', 'kado Miya'];
// const winner = customers[Math.round(Math.random()*customers.length)];
// console.log(winner);

const array = ['rahim', 'karim', 'rakib', 'rahima', 'takmina', 'sakina', 'sakina', 'rabeya'];
const winner = array[Math.ceil(Math.random()*array.length)];
console.log(winner);