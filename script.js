/* 
 * Each card should turn light gray for a mouseover event
 */

// When the mouse enters the card, turn light gray
function lightenUp(e) { e.target.style.backgroundColor = 'lightgrey'; }

// When the mouse leaves the card, turn back to dark gray
function darken(e) { e.target.style.backgroundColor = 'grey'; }

// Get a list of all the cards on the page
const allCards = document.getElementsByClassName('card');

console.log(allCards);

// Add mouseenter and mouseleave events to each card
for (let card = 0; card < allCards.length; card++) {
    allCards[card].addEventListener('mouseenter', lightenUp);
    allCards[card].addEventListener('mouseleave', darken);
}

