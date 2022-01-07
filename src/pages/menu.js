import { Outlet, Link } from "react-router-dom";

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
            <Link to="/">Accueil</Link>
          {/* </li> */}
          {/* <li> */}
            <Link to="/jeu">Jouer</Link>
          {/* </li> */}
          {/* <li> */}
            <Link to="/login">Connection</Link>
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