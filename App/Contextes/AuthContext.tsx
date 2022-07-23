import { useState, useEffect, createContext, FC } from 'react'
import * as React from 'react'


export type Auth = {
    authData: any, setAuthData: any

}

function Logout() {
    return 0
}

export const AuthContext = React.createContext<Auth | boolean>({ authData: false, setAuthData: false });


const AuthProvider = (props: any) => {


    const [authData, setAuthData] = useState<Auth | boolean>(false);


    // const handleAuth = () => {
    //     setAuthData(!authData);
    //     console.log('handleAuth',authData)
    // };

    // const data = [authData, handleAuth]


    return (

        <AuthContext.Provider value={{
            authData, setAuthData
        }}>

            {props.children}

        </AuthContext.Provider>

    )
}


export default AuthProvider;
