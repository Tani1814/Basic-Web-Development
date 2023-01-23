/*function evenify(num){
    if(num % 2 == 0){
        console.log(num, ': is even number');
    }
    else{
        console.log(num, ': is odd number');
    }
}
*/

function evenify_all(nums){
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i];
        //evenify(num);
        if(num % 2 == 0){
            console.log(num, ': is even number');
        }
        else{
            console.log(num, ': is odd number');
        }
    }
}

nums = [5, 12, 3, 88, 13, 6];
evenify_all(nums);

age = [12, 4, 7, 11, 3, 10];
evenify_all(age);

//--------------

function evenify(num){
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}

var result = evenify(13);
console.log('result', result);
var square = result * result;
console.log('square', square);

//--array--
function evenify_alll(numss){
    for (let i = 0; i< numss.length; i++) {
        const num1 = numss[i];
        var ans = evenify(num1)
        even_array.push(ans);
    }
    return even_array;
}

var numss = [5, 12, 3, 88, 13, 6];
var nums_even = evenify_all(numss);
console.log(nums_even);

