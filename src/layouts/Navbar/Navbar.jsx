import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/hs-logo-transparent.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo"><img src={logo} alt="Hellberg Systems" style={{ width: "100px" }} /></div>
                <div className="nav-links">
                    <Link to="/">Hem</Link>
                    <Link to="/about">Om</Link>
                    <Link to="/contact">Kontakt</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
