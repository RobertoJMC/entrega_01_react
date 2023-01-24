import CartWidget from "../CartWidget/CartWidget"
import imagen from '../../assets/todo_sobre_ruedas.jpg'
import './NavBar.css'

const NavBar = () => {
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">
                    <img src={imagen} alt="logo" className="logo"/>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bicicletas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Patinetas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Patines</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Electricos</a>
                    </li>
                </ul>
                {/* <form class="d-flex" role="search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <CartWidget contador={0} />
            </div>
        </div>
    </nav>
    )
}

export default NavBar