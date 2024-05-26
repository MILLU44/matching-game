import React, { useState } from 'react';
import Card from './Card';

const ActivityScreen = ({ cardsData, onGameEnd }) => {
    const [cards, setCards] = useState(cardsData);
    const [selectedCards, setSelectedCards] = useState([]);
    const [matches, setMatches] = useState(0);
    const [attempts, setAttempts] = useState(0);

    const handleCardClick = (card) => {
        if (selectedCards.length === 2) {
            return;
        }
        const newSelectedCards = [...selectedCards, card];
        setSelectedCards(newSelectedCards);
        if (newSelectedCards.length === 2) {
            setAttempts(attempts + 1);
            if (newSelectedCards[0].id === newSelectedCards[1].id) {
                setMatches(matches + 1);
                setCards(cards.map(c => c.id === card.id ? { ...c, matched: true } : c));
                setSelectedCards([]);
            } else {
                setTimeout(() => setSelectedCards([]), 1000);
            }
        }
    };

    if (matches === cards.length / 2) {
        onGameEnd(attempts);
    }

    return (
        <div>
            <h1 className='heading'>Match the correct pairs</h1>
            <div className="grid">
                {cards.map((card, index) => (
                    <Card key={index} card={card} onClick={handleCardClick} flipped={selectedCards.includes(card) || card.matched} />
                ))}
            </div>
        </div>
    );
};

export default ActivityScreen;
