import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const ListaPage = () => {
  return (
    <>
    <Navbar />
    <body>

    <div className="container">
        <h1 className="oldal-cim">Diákok listája</h1>
        <p className="oldal-alcim">1. feladatban minta adat (a működés később feladat).</p>

        <div className="table-sajat">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Azon</th>
                        <th>Név</th>
                        <th>Születési év</th>
                        <th>Osztály</th>
                        <th>Település</th>
                        <th>Kép</th>
                        <th>Művelet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kovács Anna</td>
                        <td>2007</td>
                        <td>10A</td>
                        <td>Budapest</td>
                        <td>kepek/1.jpg</td>
                        <td><button className="btn btn-outline-danger btn-sm">Törlés</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nagy Péter</td>
                        <td>2006</td>
                        <td>11B</td>
                        <td>Debrecen</td>
                        <td className="text-muted fst-italic">Nincs kép</td>
                        <td><button className="btn btn-outline-danger btn-sm">Törlés</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tóth Eszter</td>
                        <td>2008</td>
                        <td>9A</td>
                        <td>Pécs</td>
                        <td>kepek/3.jpg</td>
                        <td><button className="btn btn-outline-danger btn-sm">Törlés</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Szabó Bence</td>
                        <td>2005</td>
                        <td>12A</td>
                        <td>Győr</td>
                        <td className="text-muted fst-italic">Nincs kép</td>
                        <td><button className="btn btn-outline-danger btn-sm">Törlés</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Varga Réka</td>
                        <td>2007</td>
                        <td>10B</td>
                        <td>Miskolc</td>
                        <td>kepek/5.jpg</td>
                        <td><button className="btn btn-outline-danger btn-sm">Törlés</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="megjegyzes-doboz">
            <strong>Megjegyzés:</strong> ebben a külön feladatban a törlés gomb csak a felület része (nem végez adatbázis-műveletet).
        </div>
    </div>

    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
    </>
  );
}

export default ListaPage;