import { Outlet, Link } from "react-router-dom";
import "../Menu.css";
// import "../index.css";

export default function Menu() {
  return (
    <>
      <nav>
        <div className="container">
          <div col col-3></div>
          <div className="screen col col-6">
            <h1 className="textBox">Capitaine #username</h1>
          </div>
          <div col col-3></div>
          <div col col-3></div>
          <ul className="row col col-6">
            <div className="screen">
              <div className="textBox">
                <Link to="/">Accueil</Link>
              </div>
            </div>

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
          <div col col-3></div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
