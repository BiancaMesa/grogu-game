import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import { useState } from 'react';
import '../scss/App.scss'; 

function App() {
const [diceValue, setDiceValue] = useState(null); 
const [groguPosition, setGroguPosition] = useState(0);
const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]); 
const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]); 
const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]); 
const [gameState, setGameState] = useState("in progress");

function rollDice () {
  const randomNumber = Math.floor(Math.random() * 4)+1;
  setDiceValue(randomNumber);
  console.log(randomNumber); 

  if(randomNumber === 4) {
    setGroguPosition(groguPosition +1);
  }
}

  return (
    <>
      <Header/>
      <main className="page">
        <h3 className="subtitle">Introduce tu nombre para jugar</h3>
        <input className="inputName" type="text" name="" id="" placeholder="Escribe tu nombre"/>

        <Board groguPosition={groguPosition}/>

        <section>
          <Dice handleDice={rollDice}/>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>

    </>
  )
}

export default App;
