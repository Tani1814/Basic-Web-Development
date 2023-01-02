const yr = 2055;
console.log(2055 % 4);

//--
const year = 2058;
let remainder = year % 4;
console.log(remainder == 0);

if(remainder == 0){
    console.log('leap year');
}
else {
    console.log('not a leap year');
}

//--

function LY(year1){
    const remainder = year1 % 4;

    if(remainder == 0){
       return true;
    }
    else {
    return false;
    }
}

const check = LY(2000);
console.log(check);
