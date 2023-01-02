//max
var business = 450;
var minister = 650;
var sochib = 850;
var max = (business, minister, sochib);
console.log(max);

//basic if else
if(business > minister){
    if (business > sochib){
        console.log("business is bigger");
    }
    else{
        console.log("sochib is bigger");
    }
}
else{
    if(minister > sochib){
        console.log("minister is bigger");
    }
    else{
        console.log("sochib is bigger");
    }
}