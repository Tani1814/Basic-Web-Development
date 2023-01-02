//var,let,const
//array
//loop -immidiate
//function -not immediate
//for loop in function
//recursion
function factorial(num){
    var fact = 1;
    for (var i = 1; i <= num; i++){
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}

var result = factorial(5);
console.log('result', result);
//this in iterative way.if we want to turn this in recursive
function factRecursive(num){
     if (num == 1) {
        return 1;
        console.log(num);
     }
     else {
         console.log(num, num-1);
         return num * factRecursive(num - 1);  //4 * factRecursive (3)-> 4*3* factRecursive(2)
     }
}
var result = factRecursive(4);
console.log('result', result);