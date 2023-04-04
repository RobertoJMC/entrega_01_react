import CartWidget from "../CartWidget/CartWidget"
import imagen from '../../assets/todo_sobre_ruedas.jpg'
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to='/'>
                    <img src={imagen} alt="logo" className="logo"/>
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/categoria/Bicicletas' className={({ isActive }) => isActive ? 'btn btn-dark':'btn btn-outline-dark'} >Bicicletas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/categoria/Patinetas' className={({ isActive }) => isActive ? 'btn btn-dark':'btn btn-outline-dark'} >Patinetas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/categoria/Patines' className={({ isActive }) => isActive ? 'btn btn-dark':'btn btn-outline-dark'} >Patines</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/categoria/Electricos' className={({ isActive }) => isActive ? 'btn btn-dark':'btn btn-outline-dark'} >Electricos</NavLink>
                    </li>
                </ul>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </div>
        </div>
    </nav>
    )
}

export default NavBar