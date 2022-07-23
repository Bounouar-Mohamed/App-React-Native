
import React, { useState, useEffect, createContext, FC } from 'react'
import axios from "axios";



type Text = {

  name: any;
  setName: any;
  lastName: any;
  setLastName: any;
  email: any;
  setEmail: any;

}


export const UserContext =
  React.createContext<Text | null>(null);


export const UserProvider = (props:any) => {



  const [name, setName] = useState();
  const [lastName, setLastName] = useState<Text>();
  const [email, setEmail] = useState<Text>();


  // useEffect(() => {

  //   axios.get("https://first-server-express.herokuapp.com/profile")
  //     .then(resp => {

  //       setName(resp.data.rows[0].firstname)
  //       setLastName(resp.data.rows[0].lastname)
  //       setEmail(resp.data.rows[0].email)

  //     })
  //     .catch(err => { console.log("erreur:", err) })
      
  // }, []);



  return (


    <UserContext.Provider value={{
      name, setName,
      lastName, setLastName,
      email, setEmail
    }}>

      {props.children}

    </UserContext.Provider>

  )


}

export default UserProvider;