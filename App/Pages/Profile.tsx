import React, { useContext, useEffect } from 'react'
import { Pressable, Text, View } from 'react-native';
import { AuthContext, Auth } from '../Contextes/AuthContext';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
import { UserContext } from '../Contextes/ProfileContexte';
import { useState } from 'react';


const Profile: React.FC = () => {


    const InfoUser = useContext(UserContext);
    const Auth = useContext(AuthContext);


    console.log('test',Auth)
    const [logout,setLogout] = useState('0')


    if (InfoUser?.lastName === undefined) {
        console.log('...Wait')
    }




    return (

        <View >

            <Text> PROFILE</Text>

            {/* <header className='profile-header'>
                <PersonPinIcon style={{ fontSize: 100 }} />
            </header> */}


            <Text>Name: {InfoUser?.name}</Text>
            <Text>Lastname: {InfoUser?.lastName}</Text>
            <Text>Email: {InfoUser?.email}</Text>

            {/* <button onClick={() => strinf?.name}> change Names!! </button> */}

            <Pressable onPress={()=> {Auth }}  >

                <Text>  Logout </Text>

            </Pressable>


        </View>

    )
}

export default Profile;