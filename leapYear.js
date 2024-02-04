// SIMPLE LEAP YEAR 
function isLeapYear(year){
    if(year % 4 === 0){
        return 'your year is a leap year';
    }
    else{
        return 'your year is not a leap year';
    }
}

// console.log(isLeapYear(2014));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2032));

// IF A YEAR IS DIVISIBLE BY 4 AND NOT DIVISILBLE BY 100 THIS IS A LEAP YEAR

function leapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(leapYear(2000));
console.log(leapYear(2012));
console.log(leapYear(2024));