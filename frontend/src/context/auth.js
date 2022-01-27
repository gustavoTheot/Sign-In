// Arrumar essa porra

import React, { useState, createContext} from 'react';
import api from '../services/api'

const AuthContext = createContext({});

export function AuthProvider ({ children }){
  const [username, setUsername] = useState({})

  async function Login(){
    const data = await api.post('/sessions', {username})

    setUsername(username)

    console.log(data)
  }

  return (
    <AuthContext.Provider value={{ Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
