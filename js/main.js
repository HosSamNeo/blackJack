const messageEl = document.getElementById('messages');
const cardEl = document.getElementById('card');
const start = document.getElementById('start');
const newC = document.getElementById('new');
const popup = document.getElementById("pop");
const reBTN = document.getElementById("reBTN");
const popMSG = document.getElementById("pop-msg");
const sumNum = document.getElementById('sums');
const cardsNum = document.getElementById('card');
let sum = 0;
let cards=[];
let isAlive = false;
let hasBlackJack = false;
let message = '';

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1;
    if (randomNum === 1){
        return 11;
    }
    else if( randomNum > 10){
        return 10;
    }
    else{
    return randomNum;
    }
}

function renderGame(){
    cardsNum.textContent = 'Cards: ' ;
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += ' ' + cards[i] ;
    }
    sumNum.textContent='Sum: ';
    sumNum.textContent += sum;
    if (sum < 21){
        message = 'Do you want a card ?';
    } else if(sum === 21){
        hasBlackJack = true;
        popup.classList.remove("hide");
        popMSG.textContent = 'Woohoo! you got a black Jack';

    } else{
        isAlive = false;
        popup.classList.remove("hide");
        popMSG.textContent = 'Game over';

    }
    messageEl.textContent=message;
}

start.addEventListener('click' , function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard , secondCard];
    let sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
});

newC.addEventListener('click' , function newCard(){
    if(hasBlackJack === true || isAlive === false){
        console.log('game done');
    }
    else{
        let card = getRandomCard();
        cards.push(card)
        sum += card;

        cardEl.textContent = 'Cards: ' ;
        for(let i = 0; i < cards.length; i++){
        cardEl.textContent += ' ' + cards[i] ;
        }
        renderGame()
    }
    
});

reBTN.addEventListener('click' , function reset(){
    popup.classList.add("hide");
    sumNum.textContent='Sum: ';
    cardsNum.textContent = 'Cards: ' ;
    sum = 0;
    cards=[]
    messageEl.textContent=  'Wanna play a round?';
    hasBlackJack = false;
});