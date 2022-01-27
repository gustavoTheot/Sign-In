import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'

import api from '../services/api'

export default function Register() {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()


    async function handleRegister(e){
        e.preventDefault()

        const data = {
            username,
            password
        };

        try{
            await api.post('users', data)

            toast.success("This didn't work.")

            navigate('/')

        }catch(error){
            toast.error("This didn't work.")
        }
        
    }

    return(
        <div className="container register">
            <form onSubmit={handleRegister}>
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

                <button type="Sumbit">Create</button>
            </form>
            <Toaster/>
        </div>
    );
}
