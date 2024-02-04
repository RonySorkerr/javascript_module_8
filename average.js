function oddAverage(nubmers){
    const odds = [];    
    for(const number of nubmers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    const counts = odds.length;
    const avg = sum / counts;
    return avg;
}
const numbers = [1,5,8,9,3,8,2,9,4,5];
const avg = oddAverage(numbers);
console.log('The average of add numbers is : ' , avg.toFixed(3));