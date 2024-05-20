import "../scss/components/Dice.scss";

function Dice({handleDice}) {
    const handleClick = () => {
        handleDice();
    }

  return (
    <>
     <button onClick={handleClick} className="dice">Roll Dice!</button>
    </>
  );
}

export default Dice;