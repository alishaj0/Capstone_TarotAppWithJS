let deck = {};
let rank = "";
let suit = "";
let deckArr = [];

const cardBack = 'https://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg';

const container = document.querySelector('#container');
const imgDiv = document.createElement('div');
imgDiv.append(`img`);
img.innerHTML = `<div>
    <img src=${cardBack} alt=tarot card back placeholder/>
    </div>`;    
const card = document.querySelector(`.Card`);
const drawOneBtn = document.querySelector(`.drawOneBtn`);
card.classList.add(`.Card`);
drawOneBtn.classList.add(`.drawOneBtn`);


drawOneBtn.onclick = async function getRandomCard() {
    try {
        const randomCardUrl = "https://tarot.howlcode.com/api/v1/spreads/random_card";
        const randomCard = await axios.get(randomCardUrl);
        img.innerHTML = '';
        const cardInfo = document.querySelector('.Card-Info');
        const cardName = document.createElement(`h2`);
        cardInfo.prepend(cardName);

        
        cardName.innerText = randomCard.data[0].name.toUpperCase();

        const cardImage = document.createElement(`div`);
        cardName.append(cardImage);
        cardImage.innerHTML = `<div>
        <img src=${randomCard.data[0].image} alt=${randomCard.data[0].name}/>
        </div>`;
      
        const cardKeywords = document.createElement(`h4`);
        cardImage.prepend(cardKeywords);
        cardKeywords.innerText = randomCard.data[0].upright.toUpperCase();
        // Card-Summary
        const cardInformation = document.querySelector('.Card-Summary');
        const cardSummaryHeading = document.createElement('p');
        cardInformation.prepend(cardSummaryHeading);
        cardSummaryHeading.innerText = `Keywords:`;

        const cardMeaning = document.createElement('p');
        cardSummaryHeading.append(cardMeaning);
        cardMeaning.innerText = randomCard.data[0].upright.toUpperCase();

        const fullHeading = document.createElement('h5');
        cardMeaning.append(fullHeading);
        fullHeading.innerText = `Summary:`;

        const summary = document.createElement('p');
        fullHeading.append(summary);
        summary.innerText = randomCard.data[0].summary;

        const fullMeaning = document.createElement('p');
        fullHeading.append(fullMeaning);
        fullMeaning.innerText = randomCard.data[0].full_meaning;
        console.log(randomCard);

        const reset = document.createElement('button');
        const cardContainer = document.querySelector('.Container');
        cardContainer.append(reset);
        reset.innerHTML = ` 
        <button>
        <a href="javascript:location.reload(true)">Refresh</a>
        </button>`;
        reset.classList.add('drawOneBtn');

        console.log(randomCard.data[0].name);
        console.log(randomCard.data[0].image);
        console.log(randomCard.data[0].upright);
        console.log(randomCard.data[0].summary);

    } catch (err) {
        console.log(err);
    }
  

}











