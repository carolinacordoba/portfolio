import { NavLink } from "react-router-dom";
import "../../styles/navbar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/projekt">Projekt</NavLink>
        </li>
        <li className="nav-logo">
        <NavLink to="/">
          <img src="/src/assets/logo-cc.png" alt="logo CC" />
          </NavLink>
        </li>
        <li>
          <NavLink to="#contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
