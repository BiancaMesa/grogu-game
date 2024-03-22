import "../scss/components/Form.scss"; 

function Form({setName, name}) {

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    };

  return (
    <form className="form">
         <h3 className="subtitle">Introduce tu nombre para jugar</h3>
        <input className="inputName" type="text" name="" id="" placeholder="Escribe tu nombre" onChange={handleChangeName} value={name}/>
    </form>
  );
}

export default Form;