//undefined

let pakhi; //value missing
console.log(pakhi);

function add(n1, n2){
    console.log(n1 + n2);

    //return n1 + n2
    //return value missing
}
const sum = add(12, 11);
console.log(sum);

function nums(num1, num2){
    console.log(num1, num2);
}
const show = nums(14); //values didn't match with parameter
console.log(show);

const person = {name:"Sam", phone:4584};
console.log(person.gf); //property missing in object

let ages = [2, 5, 4]; //idex = 0 1 2
console.log(ages[7]); // 7 index missing

let fun = undefined; //value is set undefined 
console.log(fun);

//null

let joy = null;
console.log(joy);