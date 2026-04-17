import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" href="index.html">Diáknyilvántartó</NavLink>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#foMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="foMenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><NavLink className="nav-link" to='/'>Kezdőlap</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/lista'>Diákok listája</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/uj'>Új diák</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/modositas'>Módosítás</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    );
    }

export default Navbar;