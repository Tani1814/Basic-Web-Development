var age = [15,12,17,18,14];
console.log(age);
console.log(age[4]); //4 is the index num 0-4
var tania = age[2]; //2no index value assigned in tania var
console.log(tania);
age[1] = 21; //arrAY r value chng krte index dhore
console.log(age);
var position = age.indexOf(18); //to know the index number of array element
console.log(position); //element missing hole -1 return korbe
console.log(age);//before adding
console.log(age.length);
age.push(15); //to add extra elment
console.log(age);//after adding
console.log(age.length); //length of the array or how many elements are in this array
age.pop(); //to delete an element from the array
console.log(age);

var teaLine = ['palam','salam','talam','jalam','malam']; //string should be in ''
teaLine.shift();//to remove the first element of the array
console.log(teaLine);
teaLine.unshift('palam');//to add an element in  the first position of the array
console.log(teaLine);
var part = teaLine.slice(2,4);//slice(start,end)
console.log(part);
console.log(teaLine);