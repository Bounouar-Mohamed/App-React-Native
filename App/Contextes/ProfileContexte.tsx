import React, { useState, useEffect, createContext, FC } from 'react'




type Text = {

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




  return (


    <UserContext.Provider value={{
      firstName, setFirstName,
      lastName, setLastName,
      email, setEmail,
    }}>

      {props.children}

    </UserContext.Provider>

  )


}

export default UserProvider;