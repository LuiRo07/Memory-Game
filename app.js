const deerBackground = "url('assets/deer.png')"


// toggle button
let activeStatus = false;

function myFunction() {
    let card = document.getElementById('card1');
    const cardBackground = "url('assets/cardBG.png')"

    if (!activeStatus) {
        card.style.backgroundImage = deerBackground;
        activeStatus = true;
    } else {
        card.style.backgroundImage = cardBackground;
        activeStatus = false;
    }
    card.style.backgroundSize = 'cover';
};

