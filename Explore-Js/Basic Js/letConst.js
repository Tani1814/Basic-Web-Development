//const

const hubby = "Mahadi Hassan";
//hubby value can't be changed
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(24);
//we can change the elements of array
//but we can not change entire the array
//ERROR -> numbers = ['sunny', 'gadha', 'sourav'];
console.log(numbers); 

//object-same rule like array for const
const bf = {name:"Mahadi Hassan", phone:4575};
bf.phone = 4578;
bf.msg = "I Love You";
console.log(bf);

//let

let patient = "Fatema";
patient = "Ritu";
console.log(patient);

//doesnot leak out of scope {}

let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log('sum =',sum); //not declared in scope
//ERROR-> console.log(i);