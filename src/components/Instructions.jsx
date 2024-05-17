import { NavLink } from "react-router-dom";
import "../scss/components/Instructions.scss";

function Instructions() {
  return (
    <section className="instructions">
      <h1 className="instructions__firstTitle">¡Bienvenida al Juego de Grogu y las Mercancías! 🌟</h1>
      <p>👋 Hola, aventurera! Te encuentras en una emocionante carrera contra Grogu, el adorable ser de la galaxia. En este juego, tu objetivo es recolectar la mayor cantidad de mercancías valiosas antes de que Grogu avance por el camino.</p>
      <p> ¿Qué puedes encontrar en el camino? ¡Galletas 🍪, huevos 🥚 y ranas 🐸!</p>
      <h1 className="instructions__secondTitle">🎲 Cómo se juega </h1>
      <p>Para jugar, simplemente lanza el dado presionando el botón “¡Lanzar Dado!” y observa qué número obtienes.</p>
      <p>1️⃣ Si sacas un 1, has encontrado una deliciosa galleta 🍪 y la añades a tu colección. ¡Sigue así para guardar la mercancía!</p>
      <p>2️⃣ Si sacas un 2, descubres un valioso huevo 🥚 y lo guardas para más tarde. ¡Colecciona tantos como puedas para ganar la carrera!</p>
      <p>3️⃣ Si obtienes un 3, guardas una simpática rana 🐸 y la incluyes en tus preciados tesoros. ¡Cada rana te acerca un paso más a la victoria!</p>
      <p>4️⃣ Pero si el dado muestra un 4, ¡Grogu avanza una casilla en su emocionante viaje! 🚀 ¡Mantén el ritmo y asegúrate de recolectar más mercancías que Grogu para ganar la carrera!</p>
      <p>🔥 ¡Recuerda, cada movimiento cuenta! Recolecta tantas mercancías como puedas antes de que Grogu alcance la meta.</p>
      <p>💪🏽 ¿Estás preparada para esta desafiante carrera? ¡Lanza el dado y que empiece la competición!</p>

    <button className="instructions__button">
      <NavLink to="/game" className="instructions__button--text">
      Jugar
      </NavLink>
    </button>

  </section>
  );
}

export default Instructions;