import { useState, useEffect, createContext, FC } from 'react'
import * as React from 'react'


export type User = {

    password: any;
    setPassword: any;
    email: any
    setEmail: any

}

export const PasswordContext = React.createContext<User>({
    password: "",
    setPassword: "",
    email: "",
    setEmail: "",

    
});


const PasswordProvider = ({ children }: any) => {


    const [password, setPassword] = useState<User>();
    const [email, setEmail] = useState<User>();



    return (

        <PasswordContext.Provider value={{
            password, setPassword,
            email, setEmail,

        }}>

            {children}

        </PasswordContext.Provider>

    )
}


export default PasswordProvider;