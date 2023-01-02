//arguements is used to work with so many parameter values with out declaring
function add(num1, num2){
    var sum = 0;
    console.log(arguments);
    for (let i = 0; i< arguments.length; i++){
        const num = arguments[i];
        console.log(num);
        sum = sum + num;
    }
    function info(msg){
        console.log(msg);
    }
    //return num1 + num2;
    info('Good morning');
    return sum;
}
var result = add(4, 2, 5, 15);
console.log(result);

//more example
function getFullName(fstName, lstName){
    console.log(arguments);
    let FullName = '';
    for(let i = 0; i < arguments.length; i++){
        const namePart = [...arguments].join(''); //to convert into array
        FullName = FullName + ' ' + namePart;
    }
    return FullName;
}
const nam = ('Mahadi', 'Soytan', 'Gadha', 'Kutta');
console.log(nam);