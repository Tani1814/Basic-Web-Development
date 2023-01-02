//0! = 1
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1); //5! = 4! * 5 so, [n! = (n-1)! * n]
    }
}

var result = factorial(5);
console.log(result);

//Recusive- when a function is called by itself 
//kono akta function r vitore jdi sei function k call kora hoy