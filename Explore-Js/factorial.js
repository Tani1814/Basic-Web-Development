//3! = 3*2*1

//using for
var fac = 1;  //initial value is 1 here because in fac if intial value is 0 the the result will be 0
for(var i =1; i <= 10; i++){
    fac = fac * i;
    console.log(i,fac);
}
console.log(fac);

//using function
function fact(n) {
    var fact = 1;
    for(var i =1; i <= n; i++){
      fact = fact * i;
    }
    return fact;
}

var ans = fact(5);
console.log(ans);

//using while
var i = 1;
var fa = 1;
while(i <= 7){
    fa = fa * i;
    console.log(i , fa);   // 1 to 7 sob num er factorial dekhte
    i++;
}
console.log(fa);   // just 7 er factorial output dibe

//to do this in function
function f(n){
    var i = 1;
    var f = 1;
    while(i <= n){
       f = f * i;
       console.log(i , f);
       i++;
    }
    return f;
}
var fResult = f(4);
console.log(fResult)