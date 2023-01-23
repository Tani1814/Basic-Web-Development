const nums = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < nums.length; i++){
    //console.log(nums[i]); //will show all values
    if(nums[i] > 5){
        break;
    }
    console.log(nums[i]); //won't show values after 5
}

const num = [1, -2, -3, 4, 5, -6, 7];

for(let i = 0; i < num.length; i++){
    if(num[i] < 0){
        continue;  //skips all negative values
    }
    console.log(num[i]); //will show only positive values
}