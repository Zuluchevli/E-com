// import { Link } from "react-router-dom";
// import "../css/navbar.css";

// export default function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/register">Register</Link></li>
//             </ul>
//         </nav>
//     );
// }
import { Link } from "react-router";
import "../css/navbar.css";
import logo from "../assets/navbarLogo.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <div className="logo">
                    <Link to="./"> <img src={logo} alt="" /> </Link>
                </div>

                {/* Menu */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Icons */}
                <div className="nav-icons">
                    <span className="icon">♡</span>
                    <span className="icon cart">
                        🛒
                        <span className="badge">2</span>
                    </span>
                    <span className="icon">👤</span>
                </div>

            </div>
        </nav>
    );
}
