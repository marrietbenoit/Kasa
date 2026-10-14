import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.svg'

import '../styles/Header.css';

function Header() {
    return (
      <header>
        <img src={logo} alt="Website logo" />
  
        <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
        </nav>
      </header>
    );
  }
  
  export default Header