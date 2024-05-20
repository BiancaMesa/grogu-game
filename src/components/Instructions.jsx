import { NavLink } from "react-router-dom";
import "../scss/components/Instructions.scss";

function Instructions() {
  return (
    <section className="instructions">
      <h1 className="instructions__firstTitle">Welcome to Grogu's Galactic Adventure! 🛸</h1>
      <p>👋 Hello, adventurer! You are in an exciting race against Grogu, the adorable being from the galaxy. In this game, your goal is to collect as many valuable goods as possible before Grogu advances along the path.</p>
      <p> What can you find along the way? Cookies 🍪, eggs 🥚, and frogs 🐸!</p>
      <h1 className="instructions__secondTitle">🎲 How to play </h1>
      <p>To play, simply roll the dice by pressing the "Roll Dice!" button and see what number you get.</p>
      <p>1️⃣ If you roll a 1, you have found a delicious cookie 🍪 and add it to your collection. Keep going to save the goods!</p>
      <p>2️⃣ If you roll a 2, you discover a valuable egg 🥚 and save it for later. Collect as many as you can to win the race!</p>
      <p>3️⃣ If you get a 3, you save a cute frog 🐸 and include it in your precious treasures. Each frog brings you one step closer to victory!</p>
      <p>4️⃣ But if you get a 4, Grogu advances one space on his exciting journey! 🚀 Keep up the pace and make sure to collect more goods than Grogu to win the race!</p>
      <p>🔥 Remember, every move counts! Collect as many goods as you can before Grogu reaches the finish line.</p>
      <p>💪🏽 Are you ready for this challenging race? Roll the dice and let the competition begin!</p>

    <button className="instructions__button">
      <NavLink to="/game" className="instructions__button--text">
      Play
      </NavLink>
    </button>

  </section>
  );
}

export default Instructions;