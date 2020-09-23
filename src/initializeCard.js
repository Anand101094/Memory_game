
const shuffleCards = (cards) => {
    for(let i=0; i< cards.length -1 ; i++){
        let randomIndex = Math.floor(Math.random()* (i+1))
        let temp  = cards[randomIndex]
        cards[randomIndex]=cards[i]
        cards[i]=temp
    }
    return cards
}

export default function initializeCard() {
    let id = 0;
    const cards = ['spiderman', 'superman', 'batman', 'wonderwoman', 'hulk', 'thor', 'captainamerica', 'aquaman', 'flash', 'thanos'].reduce((acc, card) => {
        acc.push({
            id: id++,
            type: card
        })
        acc.push({
            id: id++,
            type: card
        })
        return acc
    }, [])
    return shuffleCards(cards)
}