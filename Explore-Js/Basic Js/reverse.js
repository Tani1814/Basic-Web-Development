function reverseString(str){
    var reverse = "";  // default value of a string is an empty string
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse; //reverse + char dile string soja thakbe
    }
    return reverse;
}
var s= "Hello alian brother";
var alien = reverseString(s);
console.log(alien); 