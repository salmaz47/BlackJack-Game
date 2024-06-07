let firstCard= getRandomCard();
let secondCard= getRandomCard();
let arrCard = [ firstCard , secondCard] ;
let sum = firstCard + secondCard;
let hasBlacJack = false;
let isAlive = true;
let messageEl = document.getElementById
("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard()
{
    return 5;
}

function startGame()
{
    renderGame();
}
function renderGame()
{
    sumEl.textContent = "Sum :" + sum;
    cardsEl.textContent= "Cards: " ;
    for (let i= 0; i<arrCard.length;i++)
    {
        cardsEl.textContent +=arrCard[i] + " ";
    }
    if (sum <=20)
{
   message="DO   YOU WANT TO DRAW A NEW CARD?" ;
}
else if (sum === 21)
{
    message= "Wohoo! YOU HAVE GOT BLACKJACK!";
    hasBlacJack=true; 
}

else if (sum>21)
{
    message="YOU ARE OUT OF THE GAME";
    isAlive = false;
}
messageEl.textContent=message;

}
 function newcard() 
 {
    let newCard =  getRandomCard();
    sum = sum + newCard;
    arrCard.push(newCard);
    renderGame();
 }