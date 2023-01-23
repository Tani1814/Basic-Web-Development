class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "BSMARPC";
    }
}

const student1 = new Student(1, "Tani");
const student2 = new Student(5, "Sam");
console.log(student1, student2);