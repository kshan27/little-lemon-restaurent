import './Footer.css';
import {
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import footerLogo from 'logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'Reservations', path: '/booking'},
        {name: 'Order Online', path: '/order'},
        {name: 'Login', path: '/login'},
    ];

    const contacts = [
        { icon: faLocationDot, info: '11 Olive Street, Chicago, IL 60610', },
        { icon: faPhone, info: '(100) 222-7881', },
        { icon: faEnvelope, info: 'info@littlelemon.com', },
    ];

    const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', }
    ];

    return (
        <footer className='footer'>
            <div className='container grid'>
                <img 
                    className='footer-logo' 
                    src={footerLogo} 
                    alt='Little Lemon Logo'
                />
                <nav className='footer-nav'>
                    <h4>Useful Links</h4>
                    <ul>
                        {navItems.map((navItem, index) => 
                            <li key={index}>
                                <Link to={navItem.path}>{navItem.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className='footer-contact'>
                    <h4>Contact </h4>
                    <address>
                        {contacts.map((contact, index) => 
                            <div className='contact-info' key={index}>
                                <FontAwesomeIcon icon={contact.icon} />
                                <p>
                                    {contact.info}
                                </p>
                            </div>
                        )}
                    </address>
                </div>
                <div className='footer-socials'>
                    <h4>Follow us</h4>
                    <div className='icons-container'>
                        {socials.map((social, index) => 
                            <a
                            key={index}
                            href={`https://www.${social.name}.com`}
                            >
                            <FontAwesomeIcon icon={social.icon} size='lg'/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
      </footer>
    );
};

// function Footer() {
//     return (
//         <footer>
//             <div className='logo-name'>
//                 <h3>
//                 <img src={logo} alt="little-lemon logo" />
//                 </h3>
//             </div>
//             <div className='footer-card'>
//                 <h3>Navigation</h3>
//                 <span><a href="/#">Home</a></span>
//                 <span><a href="/#">About</a></span>
//                 <span><a href="/#">Menu</a></span>
//                 <span><a href="/#">Reservations</a></span>
//                 <span><a href="/#">Order Online</a></span>
//                 <span><a href="/#">Login</a></span>
//             </div>
//             <div className='footer-card'>
//                 <h3>Contact</h3>
//                 <span><a href="/#">Phone Number</a></span>
//                 <span><a href="/#">Email</a></span>
//                 <span><a href="/#">Address</a></span>
//             </div>
//             <div className='footer-card'>
//                 <h3>Social Media</h3>
//                 <span><a href="/#">Instagram</a></span>
//                 <span><a href="/#">LinkedIn</a></span>
//                 <span><a href="/#">Pinterest</a></span>
//             </div>

//         </footer>
//     )
// }

export default Footer;