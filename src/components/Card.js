import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card, onClick, flipped }) => {
    const isImage = card.content.endsWith('.png') || card.content.endsWith('.jpg') || card.content.endsWith('.jpeg');

    return (
        <div className="card" onClick={() => onClick(card)}>
            {flipped ? (
                isImage ? (
                    <img src={card.content} alt="Card content" className="card-image" />
                ) : (
                    card.content
                )
            ) : (
                ""
            )}
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        matched: PropTypes.bool
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired
};

export default Card;
