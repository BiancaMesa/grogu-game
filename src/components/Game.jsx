import Form from "./Form";
import Board from "./Board";
import Dice from "./Dice";

function Game({setName, name, groguPosition, message, rollDice, cookies, eggs, frogs, gameState}) {

  return (
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
  );
}

export default Game;