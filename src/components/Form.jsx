import "../scss/components/Form.scss"; 

function Form({setName, name}) {

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    };

  return (
    <form className="form">
         <h3 className="subtitle">Write your name here to get started</h3>
        <input className="inputName" type="text" name="" id="" placeholder="Name" onChange={handleChangeName} value={name}/>
    </form>
  );
}

export default Form;