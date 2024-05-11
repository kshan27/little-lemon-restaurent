import 'components/Nav.css';
import logo from 'Logo-Little-Lemon.svg';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'Reservations', path: '/booking'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'Login', path: '/login'},
    ];

    return (
        <header>
        <nav className='container grid navbar'>
          <Link className='navbar-logo' to="">
            <img src={logo} alt='Little Lemon Logo'/>
          </Link>
          <button
            className='navbar-menu'
            type='button'
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {isNavExpanded 
              ? <FontAwesomeIcon icon={faXmark} />
              : <FontAwesomeIcon icon={faBars} />
            }
          </button>
          <ul className={isNavExpanded ? 'navbar-items expanded' : 'navbar-items'}>
            {navItems.map((navItem, index) => 
              <li key={index} onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <Link to={navItem.path}>
                  {navItem.name}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
}

export default Navbar;