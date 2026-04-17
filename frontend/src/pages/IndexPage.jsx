import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const IndexPage = () => {
    return (
        <>
        <body>
    
    <header>
        <div className="hero container row justify-content-center align-items-center">
            <div className="hero-content rounded-3 p-4 w-75 text-center">
                <h1>Diáknyilvántartó rendszer</h1>
                <p>Reszponzív weboldal <i>(offline Bootstrap, saját CSS)</i></p>
                <NavLink to='/lista' className="btn btn-light me-2">Diákok listája</NavLink>
                <NavLink to='/uj' className="btn btn-outline-light">Új diák felvétele</NavLink>
            </div>
        </div>
    </header>

    
    <div className="container mt-4">
        <div className="row g-3">

            <div className="col-12 col-md-4">
                <div className="nav-card">
                    <h5>Lista</h5>
                    <p>A diákok listájának táblázatos megjelenítése.</p>
                    <NavLink to='/lista' className="btn btn-primary btn-sm">Megnyitás</NavLink>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="nav-card">
                    <h5>Új diák</h5>
                    <p>Reszponzív űrlap (DEMO mentés).</p>
                    <NavLink to='/uj' className="btn btn-primary btn-sm">Megnyitás</NavLink>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="nav-card">
                    <h5>Módosítás</h5>
                    <p>Reszponzív osztály-módosítás felület (DEMO).</p>
                    <NavLink to='/modositas' className="btn btn-primary btn-sm">Megnyitás</NavLink>
                </div>
            </div>

        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js"
        integrity="sha512-Sct/LCTfkoqr7upmX9VZKEzXuRk5YulFoDTunGapYJdlCwA+Rl4RhgcPCLf7awTNLmIVrszTPNUFu4MSesep5Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
        </>
    );
    }

export default IndexPage;