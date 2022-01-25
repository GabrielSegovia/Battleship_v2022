import { Outlet, Link } from "react-router-dom";
import "../Accueil.css";


export default function Accueil () {
    return (
        <div className="container">
        <div className="accueilPhoto" >
            <br></br>
            <br></br>

            <br></br>
            <div col col-3></div>
            <div className="screen col col-6">
                  <div className="textboxaccueil">
                    <Link to="/login">Naviguer ici!</Link>
                  </div>
                </div>
            <br></br>
            <br></br>
            <br></br>

            <div col col-3></div>
            <div className="screen col col-6">
            <div className="textboxaccueil">
                <br></br>

                <h3>Bienvenue Capitaine</h3>
                <br></br>

                <p> Soyez prêt a conquérir les oceans avec votre flotte personnel dans cette nouvelle version exclusive de Battleship.
                </p>
                <p> Pour jouer, vous devez être connecter à votre compte, ensuite dans la page "jouer", vous allez à la section "Flotte navale" vous pouvez placer les bateaux et sous-marins à votre disposition. 
                </p>
                <p> Ensuite, dans l'écran attaque, vous pouvez cliquer sur l'écran pour lancer des missilles à la flotte ennemi dans le radar. 
                </p>
            
            </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

        <br></br>
        </div>
    )

}