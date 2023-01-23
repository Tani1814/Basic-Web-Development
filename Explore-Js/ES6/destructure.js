const person = {name: 'Mahadi', age: 17, job: 'Engineer', address: 'narayanganj', phone: 4575, friends: ['Tom', 'Mitu', 'Riad'], gf: 'Tani'};
//if needed few info only from object
//1st way
console.log(person.gf);

//2nd way
const gfName = person.gf;
const bfName = person.name;
console.log(gfName, bfName);

//3rd way- Destructure
const { phone, address, salary } = person; //person = full object
console.log(gfName, bfName, phone, address, salary); //salary = undefinite cause this property is not present in the object

//nested object destruction
const complexObject = {
    name : 'abc',
    info: {
        address: 'dhaka',
        leader: 'gold'
    }
}
const {leader} = complexObject.info;
console.log(leader);

//Array destructure
const friends = ['Abir','Sourav','Tahmeed','Munim','Tarik'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(chotoFriend, nextFriend);
console.log(restFriends);
