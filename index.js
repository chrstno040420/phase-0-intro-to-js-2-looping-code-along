// Code your solutions in this file

function writeCards(name, message= "surprise"){
    let messages = []
    for(let i = 0; i < name.length; i++){
       messages.push("Thank you, " + name[i] + ", for the wonderful " + message +" gift!");
    }
    return messages;
}


function countDown(){
    for(let number = 10; number >=0 ; number--){
    console.log(number);
}
}
