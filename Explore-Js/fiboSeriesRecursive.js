function fibonacchi(n) {
    if (n == 0){    //stoping condition
        return [0];
    }
    if (n == 1){
        return [0, 1];
    }               //stopping condition
    else {
        //calculate array with nth element
        var fibo = fibonacchi(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacchi(10);
console.log(result);