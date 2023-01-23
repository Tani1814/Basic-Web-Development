const students = [
    {id: 100, name: 'Tani Tara'},
    {id: 49, name: 'Mahadi Hassan'},
    {id: 81, name: 'Abir Ahmed'},
    {id: 27, name: 'Dipannita'}
];

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);