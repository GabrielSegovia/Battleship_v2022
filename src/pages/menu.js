import { Outlet, Link } from "react-router-dom";
import "../Menu.css";

export default function Menu () {
    return (
        <>
      <nav>
        <h1>Capitaine #username</h1>
        <ul>
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
            <div className="link"><Link to="/">Accueil</Link></div>
          {/* </li> */}
          {/* <li> */}
          <div className="link"><Link to="/jeu">Jouer</Link></div>
          {/* </li> */}
          {/* <li> */}
          <div className="link"><Link to="/login">Connection</Link></div>
          {/* </li> */}
          {/* <li>
            <Link to="/login">Connection</Link>
            drcre8ion.com
          </li> */}
        </ul>

        
      </nav>

      <Outlet />
    </>
    )

}