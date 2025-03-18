import { NavLink } from 'react-router-dom'
import { GiButterfly } from "react-icons/gi";
import '../../styles/navbar.scss';

const NavBar = () => {
  return (
    <nav>
      <div className='logo-name'>
      <h3><NavLink to="/">Carolina Cordoba</NavLink></h3>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Hem</NavLink></li>
        <li><NavLink to="/digitalt-cv">Digitalt CV</NavLink></li>
        <li><NavLink to="/projekt">Projekt</NavLink></li>
        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
