import Header from "./Header";
import Instructions from "./Instructions";
import Game from "./Game";
import { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import '../scss/App.scss'; 
import FooterGame from "./FooterGame";
import FooterLanding from "./FooterLanding";

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
    if (randomNumber === 1) {
      if (cookies.length !== 0) {
        setCookies(cookies.slice(1));
        setCookies(updatedCookies);
        setMessage(`Has guardado una galleta!`);
      } else {
        setMessage(`No quedan más galletas que guardar`);
      }
    }

      if (randomNumber === 2) {
        if(eggs.length !== 0) {
          const updatedEggs = eggs.slice(0, -1);
          setEggs(updatedEggs);
          setMessage(`Has guardado un huevo!`);
        } else {
          setMessage(`No quedan más huevos que guardar`);
        }
      }

      if (randomNumber === 3) {
        if(frogs.length !== 0){
          const updatedFrogs = frogs.slice(0, -1);
          setFrogs(updatedFrogs);
          setMessage(`Has guardado una rana!`);
        } else {
          setMessage(`No quedan más ranas que guardar`);
        }
      }
    }
  

useEffect(() => {
if (groguPosition === 6){
  setGameState ('¡¡Grogu se ha comido el cargamento!! Has perdido.');
} else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0){
  setGameState ('Enhorabuena, has ganado! Mando completa la misión!');
  setMessage('');
}
}, [groguPosition, cookies, eggs, frogs]);


function resetGame () {
  setDiceValue(null);
  setGroguPosition(0);
  setCookies(["🍪 ", "🍪 ", "🍪"]);
  setEggs(["🥚 ", "🥚 ", "🥚"]);
  setFrogs(["🐸 ", "🐸 ", "🐸"]);
  setGameState('');
  setName('');
  setMessage('');
};


  return (
    <>

      <Routes>
        <Route path="/" element={
          <>
            <Header name={name}/>
            <FooterLanding />
          </>
        }/>

        <Route path="/instructions" element={<Instructions /> }/>

        <Route path="/game" element={
          <>
            <Header name={name}/>
            <Game setName={setName} name={name} groguPosition={groguPosition} message={message} rollDice={rollDice} cookies={cookies} eggs={eggs} frogs={frogs} gameState={gameState} handleResetGame={resetGame}/>
            <FooterGame />
          </>
        }/>
      </Routes>

    </>
  )
}


export default App;
