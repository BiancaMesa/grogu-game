import { NavLink } from "react-router-dom";
import "../scss/components/Footer.scss";

function FooterGame() {
  return (
      <footer className="footer">
        <nav >
          <ul className="footer__menu">
    
            <li className="footer__menu--item">
              <NavLink to="/" className="footer__menu-link active">
                Homepage
              </NavLink>
            </li>
            <li className="footer__menu--item">
              <NavLink to="/instructions" className="footer__menu-link">
                Instructions
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
  );
}

export default FooterGame;
