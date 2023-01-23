var n = 10;
for(i = 2; i < n; i++){
    console.log(i, n % i);
    if(n % i == 0){
        console.log('not a prime number');
        break;
    }
    console.log('your num is a prime number')
}

//funct

function prime(n) {
    for (i = 2; i < n; i++){
        if(n % i == 0) {
            return 'not prime';
        }
    }
    return 'num is prime';
}
var result = prime(17);
console.log(result);