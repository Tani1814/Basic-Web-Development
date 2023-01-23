//if the name is more than 4 we will change it
var nam = 'Tania';
console.log(nam.length);

if(nam.length > 4){
    nam = 'Tara';     //string index strats with 0 but length counts from 1
}
console.log(nam);

//use of const and let

//use of const(constant) instead of var
//(when the value of variable is fixed or no need to change and can't be chng)
const country = 'Bangladesh';
//country='canada'; not possible
console.log(country);

//use of Let instead of var
//(when the value of variable is not fixed or may need to change)
let age = 15;
age = 18;
console.log(age);