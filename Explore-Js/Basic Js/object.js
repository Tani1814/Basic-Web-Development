var stu1 = { id:121, phone:1745, name:"Tania"};
var stu2 = { id:122, phone:1744, name:"Tara"};
console.log(stu1);
console.log(stu2);

var phnNo1 = stu1.phone; //to access an object's a specific property
console.log(phnNo1);

var phnNo1 = stu1["phone"]; //second way
console.log(phnNo1);

var phnPropName = "phone"  //third way(keeping the property value in a new var)
var phnNo2 = stu2[phnPropName ]; 
console.log(phnNo2);

//to chng or update any property value
stu2.phone = 1844;    //first way
console.log(stu2);

stu2["phone"] = 1884; //second way
console.log(stu2);

stu2[phnPropName] = 1775; //third way
console.log(stu2);

//to add a new property
stu1.study = "CSE";
console.log(stu1);