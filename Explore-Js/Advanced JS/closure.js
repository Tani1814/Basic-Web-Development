function stopWatch(){
    let count = 0;  //variable out of return funtion
    return function(){    //returning function to crete close environment
        count++;
        return count;
    }
}

const clock1 = stopWatch();  //keeping a value of own
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();  ////keeping a value of own
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());