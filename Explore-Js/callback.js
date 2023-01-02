function callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age);
    task();  //akhane function call hocche & callback hocche
    //washHand()
}

function washHand(){
    console.log('wash your hand with soap');
    //takeShower();
}

function takeShower(){
    console.log('take shower');
}

callback('mahadi', 21, washHand);
callback('gadha', 22, takeShower);

//ekjon hat dhube ar ekjn gosol korbe

//It was an example of Synchronous Callback Function (serialwise)

//more example
function welcomeGuest(actor, greetHandler){
    greetHandler(actor);
}
function greetMorning(actor){
    console.log('Good Moring', actor);
}
function greetNight(actor){
    console.log('Good Night', actor);
}

welcomeGuest('Tom Hanks', greetMorning);
var actorName = 'Kate Winslet';
welcomeGuest(actorName, greetNight);

//callback using anonymous function
welcomeGuest('Mahadi Hassan', function(special){
    console.log('I love you My Love', special);
});