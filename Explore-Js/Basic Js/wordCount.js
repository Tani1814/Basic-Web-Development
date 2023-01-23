var sen = "I   am a good person. But My life is pathetic. ";
sen[2] = "q"; //it wont replace cause its not an array
console.log(sen);

var count = 0;
for(var i = 0; i < sen.length; i++){
    var char = sen[i];
    if(char == " "){  //space pele word count korbe, space na pele word er sesh e count korbe na
        count++;       // space duita pele extra word count hobe
    }
}
count++; //sesh r space chara word count kore na tai 1 baray deya
console.log(count);

//TO SOLVE more than one space prblm
var count = 0;
for(var i = 0; i < sen.length; i++){
    var char = sen[i];
    if(char == " " && sen[i-1] != " "){ //age space ase naki ataw check krse
        count++;      
    }
}
console.log(count);