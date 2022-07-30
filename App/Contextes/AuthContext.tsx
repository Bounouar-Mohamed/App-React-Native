import { useState, useEffect, createContext, FC } from 'react'
import * as React from 'react'


export type Auth = {

    authData: string | any,
    setAuthData: string | any

}


export const AuthContext = React.createContext<Auth>({

    authData: "",
    setAuthData: ""

});


const AuthProvider = (props: any) => {


    const [authData, setAuthData] = useState<Auth | string>("0");

    console.log('contexte Auth', authData)

    return (

        <AuthContext.Provider value={{

            authData, setAuthData

        }}>

            {props.children}

        </AuthContext.Provider>

    )
}


export default AuthProvider;
