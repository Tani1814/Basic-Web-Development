//first way
function add(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15);
console.log(total);

//second way
function sum(n1, n2){
     n2 = n2 || 0;
    return n1 + n2;
}
const total2 = sum(17);
console.log(total2);

//third way
function cal(v1, v2 = 20){
   return v1 + v2;
}
const result = cal(5); //20+5=25
console.log(result);