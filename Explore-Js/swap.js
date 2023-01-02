//--1st way--
var a = 5;
var b = 7;
console.log("before swap: a =", a, "b =", b);
var temp = a; //keeping a's value in temp
a = b;  //assigning value of b in a
b = temp; // assigning value of a (which was kept in temp) in b
console.log("after swap: a =", a, "b =", b);

//--2nd way
var x = 5;
var y = 7;
x = x + y;
y = x - y;  //here x=12 ; x=y-y
x = x - y;   //here y=5
console.log("after swap: x =", x, "y =", y);

//--3rd way--
var p = 5;
var q = 7;

[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);
