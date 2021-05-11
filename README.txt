Tarot API 
_URL: https://tarot.howlcode.com/api/v1_
_URL: https://localhost:3000/api/v1_


Draws all cards in order
    /cards

Draws ALL cards randomly shuffled
    /spreads/shuffled

Draws one random card
    /spreads/random_card

Draws three random cards
    /spreads/three_cards

Draws 10 random cards
    /spreads/celtic_cross

Each card has unique information which you can grab using the identifiers of the object:

an image of the card face
    image
The card's name
    name
A summary of the card's meaning
    summary
A more verbose description of what the card means
    full_meaning
When the card is upright, these are the keywords it can mean
    upright
When the card is reverse, these are the keywords applicable to its meaning
    reversed