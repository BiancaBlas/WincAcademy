//declare
function doubleSquare(number1, number2){
    square1 = number1* number1;
    square2 = number2*number2;
    sum= square1 + square2;
    squared= sum*sum;
    return squared;
}
console.log(doubleSquare(2,3));

//expression
const doubleSquared = function(number3, number4){
    square3 = number3 * number3;
    square4 = number4 * number4;
    sum2= square3 + square4;
    squared2 = sum2*sum2;
    return squared2;
};
console.log(doubleSquared(2,3));

//arrow
const doubledSquare = (number5, number6) => {
    square5 = number5 * number5;
    square6 = number6 * number6;
    sum3= square5 + square6;
    squared3 = sum3*sum3;
    return squared3;
};
console.log(doubledSquare(2,3));