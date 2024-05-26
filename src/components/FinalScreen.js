import React from 'react';

const FinalScreen = ({ attempts }) => {
    const bananas = Math.max(10 - attempts, 0);
    return (
        <div>
            <h1>Congratulations!</h1>
            <p>You collected {bananas} bananas!</p>
        </div>
    );
};

export default FinalScreen;
