```javascript
const cards = [
    {
        number: "CARD 001",
        title: "THE FOOL",
        story: "Every beginning carries a strange kind of courage."
    },

    {
        number: "CARD 002",
        title: "THE WANDERER",
        story: "Some people leave because they know where they are going."
    },

    {
        number: "CARD 003",
        title: "THE VOID",
        story: "Sometimes the empty space is where everything begins to speak."
    },

    {
        number: "CARD 004",
        title: "THE HOTEL",
        story: "Welcome to the hotel. Your room has already been prepared."
    },

    {
        number: "CARD 005",
        title: "THE PLAYGROUND",
        story: "The playground is still open after midnight."
    },

    {
        number: "CARD 006",
        title: "THE AFTERLIGHT",
        story: "After everything disappears, something remains."
    }
];


let drawTotal = 0;


function drawCard() {

    alert("DRAW BUTTON WORKS!");

    const randomIndex = Math.floor(Math.random() * cards.length);

    const selectedCard = cards[randomIndex];


    document.getElementById("cardNumber").textContent =
        selectedCard.number;

    document.getElementById("cardTitle").textContent =
        selectedCard.title;

    document.getElementById("backTitle").textContent =
        selectedCard.title;

    document.getElementById("cardStory").textContent =
        selectedCard.story;


    document.getElementById("card").classList.remove("flipped");


    drawTotal++;

    document.getElementById("drawCount").textContent =
        drawTotal;
}


document.getElementById("drawButton").onclick = drawCard;
