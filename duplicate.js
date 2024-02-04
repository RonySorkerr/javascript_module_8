//duplicate elements
// const numbers = [5,6,8.3,8.6,4.9,6,64];

function isThere(array){
    const unique = [] // a new empty array
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
            console.log('items',  item);
        }
    }
    return unique;
}

const array = [5,9,9,9,6,3,5,5,2,58,5,8,5,8,6,48,55,6,96,55,645,6,6,645]
const newArray = isThere(array);
console.log(newArray);