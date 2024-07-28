import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return <nav>
    <NavLink to="/" className={ ({isActive}) =>
      isActive ? "activeLink link": "noneActiveLink link"
    }>Domu</NavLink><br />
    <NavLink to="/movies" className={ ({isActive}) =>
      isActive ? "activeLink link" : "noneActiveLink link"
    }>Filmy</NavLink><br />
    <NavLink to="/serials" className={ ({isActive}) =>
      isActive ? "activeLink link": "noneActiveLink link"
    }>serialy</NavLink>
  </nav>
}

export default Navbar