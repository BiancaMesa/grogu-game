import Header from "./Header";
import Form from "./Form";
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
const [name, setName] = useState(""); 
const [message, setMessage] = useState(""); 

function rollDice () {
  const randomNumber = Math.floor(Math.random() * 4)+1;
  setDiceValue(randomNumber);
  console.log(randomNumber); 

  if(randomNumber === 4) {
    setGroguPosition(groguPosition +1);
    setMessage(`Grogu ha avanzado una casilla${name && `, ${name}`}`); 
  }
}

  return (
    <>
      <Header name={name}/>
      <main className="page">
        <Form setName={setName} name={name}/>

        <Board groguPosition={groguPosition} message={message} name={name}/>

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
