/*
//Falsy
false
0
""
undefined
null
NaN
*/

/*
//Truthy
'0'
' '
[]
{}
*/
//int
var age = 4;

if(age)
   console.log("condinion is True"); // except 0 zero for every num it will be true
else
   console.log("condinion is False");

//string
const name = " ";

if(name)
   console.log("condinion is True"); // except "" empty string for every num it will be true
else
   console.log("condinion is False");

//using or 
const phone = 0;

if(phone || phone == 0)
   console.log("condinion is True");
else
   console.log("condinion is False");