import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const ModositasPage = () => {
    return (
        <>
        <Navbar />
        <body>

    <div className="container">
        <h1 className="oldal-cim">Osztály módosítása</h1>
        <p className="oldal-alcim">1. feladat: reszponzív felület + DEMO mentés (adatbázis nélkül)</p>

        <form className="urlap-keret mx-auto">

            <div className="mb-3">
                <label for="diak" className="form-label">Diák kiválasztása</label>
                <select className="form-select" id="diak">
                    <option value="">Válasszon…</option>
                    <option value="1">Kovács Anna</option>
                    <option value="2">Nagy Péter</option>
                    <option value="3">Tóth Eszter</option>
                    <option value="4">Szabó Bence</option>
                    <option value="5">Varga Réka</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="uj_osztaly" className="form-label">Új osztály</label>
                <select className="form-select" id="uj_osztaly">
                    <option value="">Válasszon osztályt…</option>
                    <option>9A</option>
                    <option>9B</option>
                    <option>10A</option>
                    <option>10B</option>
                    <option>11A</option>
                    <option>11B</option>
                    <option>12A</option>
                    <option>12B</option>
                </select>
            </div>

            <div className="d-grid mb-3">
                <button type="button" className="btn btn-primary">Mentés</button>
            </div>

        </form>

        <div className="megjegyzes-doboz">
            <strong>Megjegyzés:</strong> Ebben a külön feladatban a módosítás DEMO (nem kerül adatbázisba).
        </div>
    </div>

    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
        </>
    );
    }

export default ModositasPage;