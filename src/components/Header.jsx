import "../scss/components/Header.scss";

function Header ({name}) {
    return (
        <header>
            <h1 className="title">Watch out for Grogu{name && `, ${name}`}!</h1>
        </header>
    ); 
}

export default Header; 