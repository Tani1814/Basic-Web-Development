function fibonacchi(n) {
    if (n == 0){    //stoping condition
        return 0;
    }
    if (n == 1){
        return 1;
    }               //stopping condition
    else {
        return fibonacchi(n-1) + fibonacchi(n-2);
    }
}
var result = fibonacchi(10);
console.log(result);