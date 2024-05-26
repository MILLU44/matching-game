import React from 'react';

const InstructionScreen = ({ onNext }) => {
    return (
        <div>
            <h1 className='heading'>Instructions</h1>
            <p className='paragraph'> Match the cards to win bananas!</p>
            <button onClick={onNext} className='button'>Next</button>
        </div>
    );
};

export default InstructionScreen;
