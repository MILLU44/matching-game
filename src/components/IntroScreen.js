import React from 'react';

const IntroScreen = ({ onStart }) => {
    return (
        <div>
            <h1 className='heading'>Welcome to Kiddos</h1>
            <button onClick={onStart} className='button'>Start</button>
        </div>
    );
};

export default IntroScreen;
