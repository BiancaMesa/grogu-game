import { useState } from 'react';
import '../scss/App.scss'; 

function App() {
const [diceValue, setDiceValue] = useState(0); // revisar si el valor incial del dado es un string vacio o 0 o null?
const [groguPosition, setGroguPosition] = useState(0);
const [remainingGoods, setRemainingGoods] = useState({cookies: 3, eggs: 3, frogs: 3}); 

  return (
    <>
      <header>
        <h1 className="title">¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <h3 className="subtitle">Introduce tu nombre para jugar</h3>
        <input className="inputName" type="text" name="" id="" placeholder="Escribe tu nombre"/>

        <section className="board">
          <div className="cell"><div className="grogu">👣</div></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section>
          <button className="dice">Lanzar Dado</button>
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
