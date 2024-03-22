import "../scss/components/Header.scss";

function Header ({name}) {
    return (
        <header>
            <h1 className="title">¡Cuidado con Grogu{name && `, ${name}`}!</h1>
        </header>
    ); 
}

export default Header; 