//Global & Local Variable
var name = 'Mahadi'; //global variable

function addUser(){
    var loveName = 'Babui'; //local variable
    console.log(loveName); //can be use here
}
//Error cause local variable can't be access outside of function
//console.log(loveName);

addUser();

//IIFE-Immediately Invoked Function Expression
(function(){
    console.log('I love you', name);
})();

//Declaration $ Expression
//Function declaration
function addToDo(task){
    const newTaskElement = document.createElement('li');

}
//Function Expression
var ToDo = function(task){

}
