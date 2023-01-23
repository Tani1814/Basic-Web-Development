console.log(7);
console.log('good');

//today's date
var date = new Date();
var date1 = new Date('1996-11-25');
console.log(date);
console.log(date1);

//how to declare variable
var bananaPrice = 12;
console.log(bananaPrice);

//how to know the type of variable
var seenAfter = 21;
console.log(typeof seenAfter);

//string type variables
var myName = "Tania";
console.log(myName);
console.log(typeof myName);

//true or false
var isHot = true;
var isRich = false;
console.log(isHot);
console.log(isRich);
console.log(typeof isRich);

//to change varible value
var hisName = 'Mahadi';
hisName = 'Gadha';
console.log(hisName);

//promise
var promise = "I will work on NODE JS.";
//to see in lowercase
console.log(promise.toLowerCase());
//to see in uppercase
console.log(promise.toUpperCase());
//to search index of some element
console.log(promise.indexOf('will'));
//if the element is missing
console.log(promise.indexOf('promise'));
console.log(promise.indexOf('node'));
//split-on says when it will split
console.log(promise.split('on'));
console.log(promise.split(' '));

//convert string into num(parseFloat,parseInt)
var num1 = 25;
var num2 = '15.5';
num2 = parseFloat(num2);
console.log(num1 + num2);
//convert num to string
num1 = ''+num1;
console.log(typeof num1);

//fix float value result
var num3 = 0.1;
var num4 = 0.2;
var total = num3 + num4;
total = total.toFixed(2)
console.log(total)

//i++
var num0 = 4;
num0++;
console.log(num0)
num0--;
console.log(num0)

//num+space+string
var num5 = 21;
var name1 = 'Tani';
var result = num5 + ' ' + name1;
console.log(result);

//absolute and round
var num6 = -5;
var absnum = Math.abs(num6);
console.log(absnum);

var num7= 5.4545;
var num8 = 5.545;
var roundValue = Math.round(num7);
var roundValue1 = Math.round(num8);
console.log(roundValue);
console.log(roundValue1);

//round ceil
var ceilResult = Math.ceil(num7);
console.log(ceilResult);

//round floor
var floorResult = Math.floor(num8);
console.log(floorResult);

//random 0-1
var num9 = 15.0000;
var ran = Math.random();
console.log(ran);

//random 1-100
var num10 = Math.random()*100;
var ran1 = num10;
console.log(ran1);

var num11 = Math.random()*100;
var ran2 = Math.round(num11);
console.log(ran2);

//Math.max();
var bus = 450;
var min = 650;
var soc = 550;

var max = Math.max(bus, min, soc);
console.log(max);