// // converting inch to feet

// function inchToFeet(inch){
//     const feet = inch / 12;
//     return feet;
// }

// const feet = inchToFeet(75);
// // console.log(feet);


// function inchToFeet2(inch){
//     const feet = inch / 12;
//     const feetNumber = parseInt(feet);
// }

// const myHeight = inchToFeet2(78);
// console.log(inchToFeet2);



function inchToFeet(Height){
    const feet = Height /12;
    const feetNumber = parseInt(feet);
    const feetModulo = feet % 12;
    const result = feetNumber + ' feet ' + feetModulo.toFixed(3) + ' inch';
    return result;
}

const shamim = inchToFeet(68);
// console.log(shamim);


//kg to mg

function kgToMg(kg){
    const miliGram = kg * 100000;
    let result = "your miligram is : " + miliGram + ' miligram';
    return result;
}
// kgToMg(55);
console.log(kgToMg(25));