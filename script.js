```javascript
/* =========================
   CARD DATABASE
========================= */

const cards = [

    {
        number: "CARD 001",

        title: "THE FOOL",

        story:
            "Every beginning carries a strange kind of courage. " +
            "The Fool walks forward without knowing whether the road " +
            "will lead somewhere or nowhere at all."
    },


    {
        number: "CARD 002",

        title: "THE WANDERER",

        story:
            "Some people leave because they know where they are going. " +
            "Others leave because staying has become impossible. " +
            "The Wanderer belongs to neither."
    },


    {
        number: "CARD 003",

        title: "THE VOID",

        story:
            "There is a silence that does not mean nothing. " +
            "Sometimes the empty space is where everything " +
            "you have avoided begins to speak."
    },


    {
        number: "CARD 004",

        title: "THE HOTEL",

        story:
            "Welcome to the hotel. Your room has already been prepared. " +
            "The receptionist knows your name. " +
            "You do not remember making a reservation."
    },


    {
        number: "CARD 005",

        title: "THE PLAYGROUND",

        story:
            "The playground is still open after midnight. " +
            "The lights are on. The music is playing. " +
            "Nobody remembers who built it."
    },


    {
        number: "CARD 006",

        title: "THE AFTERLIGHT",

        story:
            "After everything disappears, something remains. " +
            "Not an answer. Not a memory. " +
            "Just enough light to prove that you were there."
    }

];


/* =========================
   GET HTML ELEMENTS
========================= */

const card = document.getElementById("card");

const cardContainer =
    document.getElementById("cardContainer");

const drawButton =
    document.getElementById("drawButton");

const cardNumber =
    document.getElementById("cardNumber");

const cardTitle =
    document.getElementById("cardTitle");

const backTitle =
    document.getElementById("backTitle");

const cardStory =
    document.getElementById("cardStory");

const drawCount =
    document.getElementById("drawCount");


/* =========================
   VARIABLES
========================= */

let drawTotal = 0;

let currentCard = null;


/* =========================
   RANDOM CARD
========================= */

function drawCard() {

    /*
        Choose a random card
        from the card database.
    */

    const randomIndex =
        Math.floor(Math.random() * cards.length);

    currentCard =
        cards[randomIndex];


    /*
        Update card information.
    */

    cardNumber.textContent =
        currentCard.number;

    cardTitle.textContent =
        currentCard.title;

    backTitle.textContent =
        currentCard.title;

    cardStory.textContent =
        currentCard.story;


    /*
        Make sure the card
        starts on the front.
    */

    card.classList.remove("flipped");


    /*
        Add drawing animation.
    */

    cardContainer.classList.remove("drawing");

    void cardContainer.offsetWidth;

    cardContainer.classList.add("drawing");


    /*
        Update counter.
    */

    drawTotal++;

    drawCount.textContent =
        drawTotal;
}


/* =========================
   FLIP CARD
========================= */

card.addEventListener("click", function() {

    /*
        Don't flip before
        the first card is drawn.
    */

    if (currentCard === null) {
        return;
    }

    card.classList.toggle("flipped");

});


/* =========================
   DRAW BUTTON
========================= */

drawButton.addEventListener(
    "click",
    drawCard
);
```
