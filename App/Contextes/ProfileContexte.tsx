import * as React from 'react'
import { useState, useEffect, createContext, FC } from 'react'




type Text = {
  Avatar:any;
  firstName: any;
  setFirstName: any;
  lastName: any;
  setLastName: any;
  email: any;
  setEmail: any;
}


export const UserContext =
  React.createContext<Text | null | undefined >(null);


export const UserProvider = (props: any) => {



  const [firstName, setFirstName] = useState<Text>();
  const [lastName, setLastName] = useState<Text>();
  const [email, setEmail] = useState<Text>();


  let Avatar = firstName + ' ' + lastName;

  console.log('Contexte Avatar :', Avatar)

  return (


    <UserContext.Provider value={{
      Avatar,
      firstName, setFirstName,
      lastName, setLastName,
      email, setEmail,
    }}>

      {props.children}

    </UserContext.Provider>

  )


}

export default UserProvider;