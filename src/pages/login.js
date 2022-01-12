import {AuthContext} from '../components/AuthContext.js';
import Auth from '../components/Auth.js';
import { useState,useMemo } from 'react';

function Login() {
  const [auth, setAuth] = useState({isAuth:false,token:null});

  return (
    <AuthContext.Provider value={[auth, setAuth] }>
      <div>
        <Auth/>
      </div>
    </AuthContext.Provider>
  );
}

export default Login;
