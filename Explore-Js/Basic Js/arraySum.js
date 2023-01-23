var nums = [55,68,72,80,84,95,98];
var sum = 0;
for(var i = 0; i < nums.length; i++){
    var element = nums[i];
        sum = sum + element;
}
console.log("Total is:", sum);

//funct
function arraySum(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        var element = num[i];
        sum = sum + element;
    }
    return sum;
}
var num = [55,72,80,84,95,98];
var result = arraySum(num);
console.log("Total:", result);
//or
var total = arraySum([72,77,84,88,95,98]);
console.log("Total:", total);