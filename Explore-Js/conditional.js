var chipPrice = 15;
if(chipPrice < 15){
  console.log('i will eat that one');
}
else{
   console.log("i wont eat");
}

//multiple condition
var job = true;
var saving = 50000;
if(job == true && saving > 5000000){
    console.log("you can get married");
}
else{
    console.log("can't married");
}

//use of else if
var job = true;
var saving = 50000;
if(job == true && saving > 5000000){
    console.log("you can get married");
}
else if(job == true){
    console.log("after some year you can marry");
}
else{
    console.log("can't married");
}

//--nested to find max value
var bus = 450;
var min = 650;
var soc = 550;
if(bus > min){
    if(bus > soc){
      console.log("BUSINESS is bigger");
    }
    else{
        console.log("SOCHIB is bigger");
    }
}
else{
    if(min > soc){
        console.log("MINISTER is bigger");
    }
    else{
        console.log("SOCHIB is bigger");
    }
}