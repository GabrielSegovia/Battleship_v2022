import { Outlet, Link } from "react-router-dom";
import "../Menu.css";
// import "../index.css";

export default function Menu () {
    return (
        <>
      <nav className="screen">
        <div className="textBox">
            <h1>Capitaine #username</h1>
            <ul className="row menumenu">
              {/* <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/jeu">Jouer</Link>
              </li>
              <li>
                <Link to="/login">Connection</Link>
              </li> */}
              {/* <li>
                <Link to="/login">Connection</Link>
                drcre8ion.com
              </li> */}
              {/* <li> */}
              <div className="textBox">
                <Link to="/">Accueil</Link>
              </div>
              {/* </li> */}
              {/* <li> */}
              <div className="textBox">
                <Link to="/jeu">Jouer</Link>
              </div>
              {/* </li> */}
              {/* <li> */}
              <div className="textBox">
                <Link to="/login">Connection</Link>
              </div>
              {/* </li> */}
              
              <div className="textBox">
                <Link to="drcre8ion.com">À propos</Link>
              </div>
            </ul>
          </div>

        
      </nav>

      <Outlet />
    </>
    )

}