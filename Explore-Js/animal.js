//1-10 mile = 50 animal
//11-20 mile = 100 animal
//var depth = 17;
function animalCal(depth){
   var animal = 0;
   if(depth <= 10){
       animal = depth * 50;
    }
   else if(depth <= 20){
       var firstPart = 10 * 50;
       var remaining = depth - 10;
       var secondPart = remaining * 100;
       animal = firstPart + secondPart;
    }
   else{
       var firstPart = 10 * 50;
       var secondPart = 10 * 100;
       var remaining = depth - 20;
       var thirdPart = remaining * 300;
       animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
var count = animalCal(17);
console.log(count);