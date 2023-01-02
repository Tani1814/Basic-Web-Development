//1 no
function feetToMile(feet){
    if(feet < 0){
       return -1;   //return 'Distance cannot be negative.';
    }
    var mile = (feet / 5280).toFixed(5);
    return mile;
}
var result = feetToMile (1450);
console.log('Mile :', result);

//2 no
function woodCal(chair,table,bed){
    var woodChair = chair * 1;
    var woodTable = table * 3;
    var woodBed = bed * 5;
    if (chair < 0 || table < 0 || bed < 0){
        return 'Enter a positive amount.';
    }
    return woodChair + woodTable + woodBed;
    
}
var woodNum = woodCal(4,1,2);
console.log("wood needed :", woodNum);

//3 n0
function brickCal(floor){
    var brick = 0;
    if(floor < 0){
        return 0;  // or return 0; cause its better to keep same type of returns
    }
    else if (floor <= 10){
       brick = floor * 15 * 1000;
    }
    else if(floor <= 20){
        var firstPart = 10 * 15 * 1000;
        var remaining = floor - 10;
        var secondPart = remaining * 12 * 1000;
        brick = firstPart + secondPart;
     }
    else{
        var firstPart = 10 * 15 * 1000;
        var secondPart = 10 * 12 * 1000;
        var remaining = floor - 20;
        var thirdPart = remaining * 11 * 1000;
        animal = firstPart + secondPart + thirdPart;
     }
     return brick;
}
var count = brickCal(5);
console.log("bricks :", count);

//4 no
function tinyFrnd(frnd){
   var min = frnd[0].length;
   var nam = frnd[0];
   for(var i = 1; i < frnd.length; i++){
        if(frnd[i].length < min){
            min = frnd[i].length;
            nam = frnd[i];
        }
      
    }
    //var min = Math.min(frnd.map(({length}) => length));
    return {min,nam};
}
var frnd = tinyFrnd(['Tania','Sourav','Tara','Abir','Gadha']);
console.log("my tiny frnd name :", frnd.min);
console.log("my tiny frnd name :", frnd.nam);
