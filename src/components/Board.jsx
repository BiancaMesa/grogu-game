import Grogu from "../components/Grogu";
import "../scss/components/Board.scss";
import PropTypes from "prop-types";

function Board({ groguPosition, message, name}) {
  const cells = Array(7).fill(null);
  console.log(cells);
  return (
    <>
      <section className="board">
        {cells.map((cell, index) => {
          cell = null;

          if (index === groguPosition) {
            cell = <Grogu />;
          }
          
          return (
            <div className="cell" key={index}>
              {cell}
            </div>
          );
        })}
      </section>

      <p>{message}</p>
    </>
  );
}

Board.propTypes = {
  groguPosition: PropTypes.number.isRequired,
};

export default Board;
