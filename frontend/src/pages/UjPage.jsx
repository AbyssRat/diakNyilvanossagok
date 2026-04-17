import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const UjPage = () => {
    return (
        <>
        <Navbar />
        <body>

    <div className="container">
        <h1 className="oldal-cim">Új diák felvétele</h1>
        <p className="oldal-alcim">1. feladat: reszponzív űrlap + DEMO mentés (adatbázis nélkül)</p>

        <form className="urlap-keret mx-auto">

            <div className="mb-3">
                <label for="nev" className="form-label">Név</label>
                <input type="text" className="form-control" id="nev" placeholder="Pl. Kovács Anna"/>
            </div>

            <div className="row mb-3">
                <div className="col-12 col-sm-6">
                    <label for="szuletesi_ev" className="form-label">Születési év</label>
                    <input type="number" className="form-control" id="szuletesi_ev"
                           placeholder="Pl. 2007" min="1990" max="2015"/>
                </div>
                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                    <label for="osztaly" className="form-label">Osztály</label>
                    <select className="form-select" id="osztaly">
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
            </div>

            <div className="mb-3">
                <label for="telepules" className="form-label">Település</label>
                <select className="form-select" id="telepules">
                    <option value="">Válasszon települést…</option>
                    <option>Budapest</option>
                    <option>Debrecen</option>
                    <option>Pécs</option>
                    <option>Győr</option>
                    <option>Miskolc</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="kep" className="form-label">Fénykép linkje</label>
                <input type="text" className="form-control" id="kep"
                       placeholder="kepek/1.jpg vagy https://…"/>
                
            </div>


            <div className="d-grid mb-3">
                <button type="button" className="btn btn-primary">Mentés</button>
            </div>

        </form>

        <div className="megjegyzes-doboz">
            <strong>Megjegyzés:</strong> A mentés itt DEMO jellegű (1. feladat), adatbázis-művelet nincs.
        </div>
    </div>

    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
        </>
    );
}

export default UjPage;