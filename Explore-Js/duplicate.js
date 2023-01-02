var id = [1,4,6,5,7,2,8,2,5,8,11];
var uniqueId = [];  //empty array

for(var i = 0; i < id.length; i++){
    var element = id[i];        //to bring a value from id array and keeping it in element var
    var index = uniqueId.indexOf(element);  //finding that element index num in uniqueid array
    if(index == -1){     // index num -1 means element is not present in uniqueId array
        uniqueId.push(element);  //adding the element in uniqueId
    }
}
console.log(uniqueId);