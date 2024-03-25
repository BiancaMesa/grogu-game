import { NavLink } from "react-router-dom";
import "../scss/components/Footer.scss";

function Footer() {
  return (
      <footer className="footer">
        <nav >
          <ul className="footer__menu">
            <li className="footer__menu--item">
              <NavLink to="/game" className="footer__menu-link">
                A jugar
              </NavLink>
               
            </li>
            <li className="footer__menu--item">
              <NavLink to="/instructions" className="footer__menu-link active">
                ¿Cómo se juega?
              </NavLink>
            </li>
            <li className="footer__menu--item">
              <NavLink to="/options" className="footer__menu-link">
                Más opciones
              </NavLink>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
      </footer>
  );
}

export default Footer;
