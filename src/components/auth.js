import { Children, createContext,useContext, useState } from 'react'

const Authcontext = createContext(null);

export const AuthProvider = () => {
    const [user, SetUser] = useState(null)
    
    const Login = user => {
        SetUser(user)
    }

    const Logout = () => {
        SetUser(null)
    }

    return <Authcontext.Provider value={{ user, Login, Logout }}>{ Children}</Authcontext.Provider>
} 

export const useAuth = () => {
    return useContext(Authcontext)
}