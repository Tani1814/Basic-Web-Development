function palindrome(word){
    var reverse = "";  // default value of a string is an empty string
    for(var i = 0; i < word.length; i++){
        var char = word[i];
        reverse = char + reverse; //reverse + char dile string soja thakbe
       if (word == reverse){
         console.log('It is a palindrome');
        }
       else{
         console.log('Not a palindrome!');
       }
    }
    return console.log(object);;
    
}
var check = palindrome(madam);
console.log(check);