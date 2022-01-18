import "../index.css";

import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {AuthContext} from './AuthContext.js';
import axios from "axios";


export default function Auth() {
    // const [valeurDuContext, setAuth] = useContext(AuthContext);
    const [auth, setAuth] = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errStyle, setErr] = useState({backgroundColor:"white"});

    
    const clickConnect = () => {
        axios.post("http://104.248.104.227/login", {username, password})
        // console.log(valeurDuContext);
        .then ((response) => {
            setErr({backgroundColor:"green"});
            let token = response.data.token;
            // setAuth({isAuth:!valeurDuContext.isAuth});
            setAuth ({isAuth:true,token});
            setUsername ("");
            setPassword ("");
        }).catch((err) => {
            setErr({backgroundColor:"red"});
            setPassword("");
        });
    };
    
    const onInputchange = (event, setStateFct) => {
        setStateFct(event.target.value);
    }
    
    return (
        <div className="screen col col-8">
            <div className="textBox">
            <br></br>
            <h3>Nom d'utilisateur</h3>
            <input 
                style={errStyle} 
                type="text" value={username} 
                onChange={(event) => onInputchange(event, setUsername)}>
            </input>
            
            <br></br>
            <br></br>
            
            <h3>Mot de passe</h3>
            <input style={errStyle} type="password" value={password} 
            onChange={(event) => onInputchange(event, setPassword)}>
                
            </input>
            <br></br>
            <br></br>
            {/* {valeurDuContext.isAuth ? 
                <p>Allo tu es connecté</p> 
                : 
                <p>Qui es-tu ?</p>
            } */}

            <button onClick={() => 
                clickConnect()}>Se connecter
            </button>
            <br></br>
            <br></br>
            </div>
        </div>);
}


