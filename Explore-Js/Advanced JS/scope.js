let bonus = 20; //global
function sum(first, second){
    let result = first + second;
    console.log(bonus);
    console.log(result); //can be access
    if(result>9){
        const mood = "happy";
        let mood1 = "angry";
        var mood2 = "sad";
        console.log(mood);
        console.log(mood1);
        console.log(mood2);
    }
    //console.log(mood1); //can't
    console.log(mood2);
    //console.log(mood); //can't be access outside if
    return result;
}
console.log(bonus);
const output = sum(3, 7);
//console.log(result); //can't access outside function
console.log(output);