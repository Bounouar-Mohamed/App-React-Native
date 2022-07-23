import { useState, useEffect, createContext, FC } from 'react'
import * as React from 'react'


export type User = {

    password: any;
    setPassword: any;
    email: any
    setEmail: any
    Auth:any,
    setAuth:any

}

export const PasswordContext = React.createContext<User>({
        password:"",
        setPassword:"",
        email:"",
        setEmail:"",
        Auth:false,
        setAuth:false
    });


const PasswordProvider= ({ children }: any) => {


    const [password, setPassword] = useState<User>();
    const [email, setEmail] = useState<User>();
    const [Auth, setAuth] = useState<User>();

    console.log('contexte', password)

    
    return (

        <PasswordContext.Provider value={{
            password, setPassword,
            email, setEmail,
            Auth,setAuth
        }}>

            { children }

        </PasswordContext.Provider>

    )
}


export default PasswordProvider;
