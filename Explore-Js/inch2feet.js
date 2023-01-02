var ich = 144;
var ft = ich / 12;
console.log(ft);

//to work on many value using function 
function inch2feet(inch){
   var feet = inch / 12;
   return feet;
}

var myFeet = inch2feet(120);
console.log(myFeet);
var hisFeet = inch2feet(78);
console.log(hisFeet);

//using array
var family = [156, 120, 178, 210, 224];
var sonFeet = inch2feet(family[1]);
console.log(sonFeet);