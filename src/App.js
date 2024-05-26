import React, { useState } from 'react';
import './App.css';
import IntroScreen from './components/IntroScreen';
import InstructionScreen from './components/InstructionScreen';
import ActivityScreen from './components/ActivityScreen';
import FinalScreen from './components/FinalScreen';
import cardData from './data/cards.json'; // assuming cards data is stored here

const App = () => {
    const [screen, setScreen] = useState('intro');
    const [attempts, setAttempts] = useState(0);

    const handleStart = () => setScreen('instructions');
    const handleNext = () => setScreen('game');
    const handleGameEnd = (attempts) => {
        setAttempts(attempts);
        setScreen('final');
    };

    return (
        <div className="App">
            {screen === 'intro' && <IntroScreen onStart={handleStart} />}
            {screen === 'instructions' && <InstructionScreen onNext={handleNext} />}
            {screen === 'game' && <ActivityScreen cardsData={cardData} onGameEnd={handleGameEnd} />}
            {screen === 'final' && <FinalScreen attempts={attempts} />}
        </div>
    );
};

export default App;
