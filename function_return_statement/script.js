function checkNumber(number){
    if (number > 100){
        return true;
    }
    else return false;
}
const bigOrNot = checkNumber(150);
console.log(bigOrNot);
// this is a function that does something


const maxPeople = 100;
const minAge = 18;
function bouncer(people, age){
    if(age>=minAge){
       if (people < maxPeople){
        return "come in";
       }
       else return "it's too busy now, come back later";
    }
    else return "this is a club for adults";
}
const acces = bouncer(40, 30);
console.log(acces);
// this function does something. I know how i could write it with no return statement, not with just 1.

function calculateAverage(number1, number2, number3, number4, number5){
    const average = (number1 +  number2 + number3 + number4 + number5)/5
    return average;
}
const averageOfNumbers  = calculateAverage(4, 5, 6, 5, 4);
console.log(averageOfNumbers);
console.log(Math.round(averageOfNumbers));

// This is a function that produces something