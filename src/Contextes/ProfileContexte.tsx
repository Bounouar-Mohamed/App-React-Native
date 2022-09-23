import * as React from 'react'
import { useState, useEffect, createContext, FC } from 'react'




type Text = {

  firstName: any;
  setFirstName: any;
  lastName: any;
  setLastName: any;
  email: any;
  setEmail: any;
  idUser: any,
  setIdUser: any
}


export const UserContext =
  createContext<Text | null | undefined>(null);


export const UserProvider = (props: any) => {


  const [idUser, setIdUser] = useState()
  const [firstName, setFirstName] = useState<Text>();
  const [lastName, setLastName] = useState<Text>();
  const [email, setEmail] = useState<Text>();

  console.log(idUser)

  return (


    <UserContext.Provider value={{

      firstName, setFirstName,
      lastName, setLastName,
      email, setEmail,
      idUser, setIdUser
    }}>

      {props.children}

    </UserContext.Provider>

  )


}

export default UserProvider;