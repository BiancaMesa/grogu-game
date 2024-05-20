import { NavLink } from "react-router-dom";
import "../scss/components/Footer.scss";

function FooterLanding() {
  return (
      <footer className="footer">
        <nav >
          <ul className="footer__menu">
    
            <li className="footer__menu--item">
              <NavLink to="/instructions" className="footer__menu-link active">
                Instructions
              </NavLink>
            </li>
            <li className="footer__menu--item">
              <NavLink to="/game" className="footer__menu-link">
                Play
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
  );
}

export default FooterLanding;
