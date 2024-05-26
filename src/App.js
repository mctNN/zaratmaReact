import React, { useState } from 'react';
import './App.css';

function App() {
  const [diceResult1, setDiceResult1] = useState(1);
  const [rolling1, setRolling1] = useState(false);
  const [diceResult2, setDiceResult2] = useState(1);
  const [rolling2, setRolling2] = useState(false);

  const rollDice = () => {
    setRolling1(true);
    const rollSound = new Audio('/roll.mp3');
    rollSound.play();
    setRolling2(true);

    setTimeout(() => {
      const result1 = Math.floor(Math.random() * 6) + 1;
      const result2 = Math.floor(Math.random() * 6) + 1;

      setDiceResult1(result1);
      setDiceResult2(result2);

      setRolling1(false);
      setRolling2(false);
    }, 1000); // 1 saniye animasyon süresi
  };

  const getDiceTransform = (result) => {
    switch (result) {
      case 1: return 'rotateX(0deg) rotateY(0deg)';
      case 2: return 'rotateX(-90deg) rotateY(0deg)';
      case 3: return 'rotateX(0deg) rotateY(90deg)';
      case 4: return 'rotateX(0deg) rotateY(-90deg)';
      case 5: return 'rotateX(90deg) rotateY(0deg)';
      case 6: return 'rotateX(180deg) rotateY(0deg)';
      default: return 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mustafa Cemin Zar Atma Projesi</h1>
        <div style={{display:'flex', gap:50}}>
          <div>
            <div className={`dice ${rolling1 ? 'rolling' : ''}`} style={{ transform: getDiceTransform(diceResult1) }}>
              <div className="face front"> <img className='face' src='dice1.png' /></div>
              <div className="face back">  <img className='face' src='dice6.png' /></div>
              <div className="face right"> <img className='face' src='dice4.png' /></div>
              <div className="face left">  <img className='face' src='dice3.png' /></div>
              <div className="face top">   <img className='face' src='dice2.png' /></div>
              <div className="face bottom"><img className='face' src='dice5.png' /></div>
            </div>
          </div>
          <div>
            <div className={`dice ${rolling2 ? 'rolling' : ''}`} style={{ transform: getDiceTransform(diceResult2) }}>
              <div className="face front"> <img className='face' src='dice1.png' /></div>
              <div className="face back">  <img className='face' src='dice6.png' /></div>
              <div className="face right"> <img className='face' src='dice4.png' /></div>
              <div className="face left">  <img className='face' src='dice3.png' /></div>
              <div className="face top">   <img className='face' src='dice2.png' /></div>
              <div className="face bottom"><img className='face' src='dice5.png' /></div>
            </div>
          </div>
          <p>Zar: {diceResult1} {diceResult2}</p>
        </div>
        <button onClick={rollDice} disabled={rolling1 || rolling2}>Zar At</button>
      </header>
    </div>
  );
}

export default App;
