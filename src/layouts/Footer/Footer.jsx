import logo from "../../assets/bilder/hs logo transparent.png";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Hellberg Systems" className="footer-logo" />

            <div className="footer-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-spotify"></i>
                </a>
                <a href="https://discord.gg/GJe563jP" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-discord"></i>
                </a>
            </div>

            <p className="footer-copy">© 2025 Hellberg Systems.</p>
        </footer>
    );
}

export default Footer;
