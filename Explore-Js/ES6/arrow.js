/*
//function in basic way
 function doubleIt(num){
     return num * 2;
 }
*/
/*
//function declaration ,expression- like variable
const doubleIt = function myfun(num){
    return num * 2;
}
*/

//ES6 - arrow function
// var functionName = Parameter => return 

//for single parameter
const doubleIt = num => num * 2;

const result = doubleIt(5);
console.log(result);

//for multiple parameter
const add = (x, y) => x + y;

const sum = add(7, 10);
console.log(sum);

//for no parameter
const give5 = () => 5;

const value = give5();
console.log(value);

//for large function
const doMath = (a, b) => {
    const sum = a + b;   //it won't be error because its inside the function
    const sub = a - b;
    const result = sum * sub; //it won't be error because its inside the function
    return result;
}

const cal = doMath(7, 5);
console.log(cal);