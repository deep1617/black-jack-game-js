console.log("hello world")
//player object

let player = {
    name : "deepanshu garg",
    chips : 200 
}
//creating two cards 


let sum=0
let message="";
let messageEl=document.getElementById("message-el")
let Sum = document.getElementById("sum")
let cardEl=document.getElementById("cards-el")
console.log(sum)

let isalive = false
let gotblackjack=false
let arr = []

let playerEl = document.getElementById("player-el")
function getrandom(){
    let x=Math.floor(Math.random()*13)+1
    if(x==1){
        return 11;
    }
    else if(x>10){
        return 10
    }
    else return x
}

player.textContent = player.name + ": $" + player.chips
function startgame(){
    sum=0
    let firstcard =getrandom()
    let secondcard =getrandom()
    arr = [firstcard,secondcard]
    sum=firstcard+secondcard
    gotblackjack=false
    isalive=true;
    rendergame()
}



function rendergame(){
    cardEl.textContent="Cards: "

    let n =arr.length

    for(let ct=0; ct < n; ct+=1){
        cardEl.textContent+=arr[ct] + " "
    }
if(sum<21){
   message="do you want to withdraw a new card "
}
else if(sum===21){
    message="woo you got a black-jack"
    gotblackjack=true
}
else {
    message="you lose. Want to start a new game" 
    isalive = false
}
Sum.textContent="Sum: " + sum
messageEl.textContent=message
}
function newcard(){
    if (isalive==true&&gotblackjack==false) {
        
    
    let newva=getrandom()
    arr.push(newva)
    sum+=newva
    rendergame() 
    }  
}

