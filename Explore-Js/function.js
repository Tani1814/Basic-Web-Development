//function_keyword function_name (){}
function sayLuvU(){
    console.log("jaan o baby");
    console.log('billy baby.. koi tumi');
}

sayLuvU(); //call korle print hobe
var date = 14;
var place = "Restaurent";
sayLuvU();
var hangoutPlace = "TSC";
sayLuvU();

//-----double-------

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}

doubleIt(5);
doubleIt(25);

//two add two doubled num

function doubleIt1(num){
    var result = num * 2;
    return result;
}

var fst = doubleIt1(5);
var scd = doubleIt1(15);
var total = fst + scd;
console.log(total);

//--add---
function add(num1,num2){
    var result = num1 + num2;
    return result;
}

var sum = add(15,27);
console.log(sum);

//lec-19 v-1
function evenify(number){
    var result;
    if(number % 2 == 0){
        //console.log(number, ': even number'); undefined
        //return number;
        result = number;
    }
    else{
        //console.log(number * 2, ': odd number and doubled'); undefined
        //return number * 2;
        result = number * 2;
    }
    return result;
}

var result = evenify(7);
console.log(result);
var square = result * result;
console.log('square', square);

function evenifyAll(numbers){
    var evenArray = [];
    for(let i = 0; i < numbers.length; i++){
        const even = numbers[i];
        var result = evenify(even);
        evenArray.push(result);
    }
    return evenArray;
}

var arr = [12, 5, 11, 14, 4, 128, 45];
var output = evenifyAll(arr);
console.log(output);
