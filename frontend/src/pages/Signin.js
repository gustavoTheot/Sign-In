import  React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
//import AuthContext from '../context/auth'
import '../style/main.css'

import api from '../services/api'

export default function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    async function handleLogin(e){
        e.preventDefault();
        
        try{  
            const {data: {id, token}} = await api.post('/sessions',{
                username,
                password
            })

            localStorage.setItem('userId', id)
            localStorage.setItem('userToken', token)
            navigate('/table')
            console.log(id, token)

        }catch(error){
            toast.error("This didn't work.")
        }   
    }
    
    return(
        <div className="container login">
            <form onSubmit={handleLogin}>
                <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

                <button type="Sumbit">Login</button>
            </form>

            <div className="register-user">
                <Link to='/register'>
                    You don't have register?
                </Link>
            </div>
            <Toaster/>
        </div>
    );
}
