// create 12 cards

const cardArray = [
    {
        name: "fries",
        image: "images/fries.png"
    },
    {
        name: "cheeseburger",
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    }, 
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: "fries",
        image: "images/fries.png"
    },
    {
        name: "cheeseburger",
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    }, 
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
    
]

// getting the cardArray in random order
// a nice trick for sorting an array randomly
// you know what?
// I don't in my right mind know how this works.

// this is a nice shortcut for shuffling...
// an array randomly.
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector("#result");
let cardsChoosen = [];
let cardsChosenIds = [];
const cardsWon = [];

createBoard();

function createBoard() {
    for(let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        // we can use append or appendChildx
        gridDisplay.append(card)
    }
}

function flipCard() {
    // to target the element clicked
    const cardId = this.getAttribute('data-id');
    cardsChoosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    

    this.setAttribute('src', cardArray[cardId].image)

    if (cardsChoosen.length === 2) {
        // call this function checkMatch after
        // 500 milliseconds.
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }

    else if (cardsChoosen[0] === cardsChoosen[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChoosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry Try Again')
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChoosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations, you found them all!"
    }
}