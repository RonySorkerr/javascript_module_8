function isLeapYear(year){
    if(year % 4 === 0){
        return 'your year is a leap year';
    }
    else{
        return 'your year is not a leap year';
    }
}

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2024));
console.log(isLeapYear(2032));