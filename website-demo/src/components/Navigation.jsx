import { Link } from "react-router-dom";
import '../css/Navigation.css'

function Navigation() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="src/assets/images/Logo.jpg" alt="Logo" className="logo-small"/>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/info" className="nav-link">Info</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
            <div className="navbar-language">
                {/* <Link to="/favorites" className="nav-lang">en/中文</Link> */}

                <Link to="/favorites" className="nav-lang"><img src="src/assets/icons/Sun.svg" alt="light-mode"></img></Link>
                <p className="nav-lang">/</p>
                <Link to="/carousel-page" className="nav-lang"><img src="src/assets/icons/Moon.svg" alt="dark-mode"></img></Link>
                {/* <Language></Language> */}
            </div>
        </nav>
    </>
        
    )
}

export default Navigation