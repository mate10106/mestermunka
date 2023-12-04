import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/Home" className="site-title">
            <img src="img/image3.png" alt="kep" className="title-img"></img>
        </Link>
        <ul>
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/login">Login / Register</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}