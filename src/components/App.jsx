import Header from "./Header";
import Form from "./Form";
import Board from "./Board";
import Dice from "./Dice";
import { useState, useEffect } from 'react';
import '../scss/App.scss'; 

function App() {
const [diceValue, setDiceValue] = useState(null); 
const [groguPosition, setGroguPosition] = useState(0);
const [cookies, setCookies] = useState(["🍪 ", "🍪 ", "🍪"]); 
const [eggs, setEggs] = useState(["🥚 ", "🥚 ", "🥚"]); 
const [frogs, setFrogs] = useState(["🐸 ", "🐸 ", "🐸"]); 
const [gameState, setGameState] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');

function rollDice () {
  const randomNumber = Math.floor(Math.random() * 4)+1;
  setDiceValue(randomNumber);
  console.log(randomNumber); 

  if(randomNumber === 4) {
    setGroguPosition(groguPosition +1);
    setMessage(`Grogu ha avanzado una casilla${name && `, ${name}`}`); 
  }

  if (randomNumber === 1 && cookies.length !== 0) {
    const updatedCookies = cookies.slice(0, -1); 
    setCookies(updatedCookies);
    setMessage(`Has guardado una galleta!`);
  }

    if (randomNumber === 2 && eggs.length !== 0) {
      const updatedEggs = eggs.slice(0, -1); 
      setEggs(updatedEggs);
      setMessage(`Has guardado un huevo!`);
    }

    if (randomNumber === 3 && frogs.length !== 0) {
      const updatedFrogs = frogs.slice(0, -1); 
      setFrogs(updatedFrogs);
      setMessage(`Has guardado una rana!`);
    }
  }

useEffect(() => {
if (groguPosition ===6){
  setGameState ('¡¡Grogu se ha comido el cargamento!! Has perdido.');
} else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0){
  setGameState ('Enhorabuena, has ganado! Mando completa la misión!');
}
}, [groguPosition, cookies, eggs, frogs]);


  return (
    <>
      <Header name={name}/>
      <main className="page">
        <Form setName={setName} name={name}/>

        <Board groguPosition={groguPosition} message={message} name={name}/>

        <section>
          <Dice handleDice={rollDice}/>
          <div className="game-status">{gameState}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">{cookies}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{eggs}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{frogs}</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>

    </>
  )
}


export default App;
