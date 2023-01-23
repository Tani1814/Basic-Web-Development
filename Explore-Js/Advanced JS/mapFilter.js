const numbers = [2, 4 , 5, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element; //square
    output.push(result);
}
console.log(output);

//using map
//way1
function square (element){
    return element * element;
}
const way1 = numbers.map(square);
console.log(way1);
//way2
const way2 = numbers.map(function(element, index, array){
   console.log(element, index, array);
    return element * element;
})
console.log(way2);

//using arrow function for this
//way 1
const square1 = element => element * element;
const square2 = x => x * x; //function
const r1 = numbers.map(square2);
console.log(r1);
//way 2
const result1 = numbers.map(x => x * x);
console.log(result1);

//filter-to select few

const smaller = numbers.filter(x => x < 5);
console.log(smaller);

// find to search one element
const isThere = numbers.find(x => x > 5);
console.log(isThere);