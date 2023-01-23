class Parent{
    constructor(){
        this.fatherName = "Mahadi";
        this.motherName = "Tania";
    }
}
class Child extends Parent{
    constructor(Cname){
        super(); //to extend parent class
        this.name = Cname;
    }
    getFullName(){
        return this.fatherName + " " + this.name + " " + this.motherName;
    }
}

const baby = new Child("Taimur");
const baby2 = new Child("Mehjabin");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());