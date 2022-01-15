import "../index.css";

import React from 'react';
import { useContext } from 'react';
import {AuthContext} from './AuthContext.js';
import axios from "axios";


export default function Auth() {
    const [valeurDuContext, setAuth] = useContext(AuthContext);
    
    // const small = new tank




    let clickConnect = () => {
        // axios.post("http://104.248.104.227/login", {username, password})
        // console.log(valeurDuContext);
        // .then ((response) => )
        // setAuth({isAuth:!valeurDuContext.isAuth});

    }
    
    return (
        <div className="screen col col-8">
            <div className="textBox">
            <br></br>
            <h3>Nom d'utilisateur</h3>
            <input tyle={errStyle} type="text" value={username} onChange={(event, setUsername)}></input>
            <br></br>
            <br></br>
            
            <h3>Mot de passe</h3>
            <input style={errStyle} type="password" value={password} onChange={(event) =>onInputChange (event, setPassword)}></input>
            <br></br>
            <br></br>
            {valeurDuContext.isAuth ? 
                <p>Allo tu es connecté</p> 
                : 
                <p>Qui es-tu ?</p>
            }

            <button onClick={() => 
                clickConnect()}>Se connecter
            </button>
            <br></br>
            <br></br>
            </div>
        </div>);
}


