import { Outlet, Link } from "react-router-dom";
import "../Menu.css";
// import "../index.css";

export default function Menu () {
    return (
        <>
      <nav>
        <div>
            <div className="screen">
                <h1 className="textBox">Capitaine #username</h1>
            </div>
            <ul className="row">
              <div className="screen">
                <div className="textBox">
                  <Link to="/">Accueil</Link>
                </div>
              </div>
              {/* </li> */}
              {/* <li> */}
              <div className="screen">
                  <div className="textBox">
                    <Link to="/jeu">Jouer</Link>
                  </div>
              </div>
              <div className="screen">
                <div className="textBox">
                  <Link to="/login">Connection</Link>
                </div>
              </div>
              {/* </li> */}
              <div className="screen">
                <div className="textBox">
                  <Link to="drcre8ion.com">À propos</Link>
                </div>
              </div>
            </ul>
          </div>

        
      </nav>

      <Outlet />
    </>
    )

}