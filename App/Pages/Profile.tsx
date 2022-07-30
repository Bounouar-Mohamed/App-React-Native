import React, { useContext, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthContext, Auth } from '../Contextes/AuthContext';
import { UserContext } from '../Contextes/ProfileContexte';
import { useState } from 'react';
import { Avatar } from "@react-native-material/core";



const Profile: React.FC = () => {


    const InfoUser = useContext(UserContext);
    const { setAuthData, authData } = useContext(AuthContext);



    const [auth, setAuth] = useState('')
    const [avatar, setAvatar] = useState('')

    // console.log('test',Auth?.)
    // const [logout,setLogout] = useState('0')

    useEffect(() => {

        if (InfoUser === undefined) {
            console.log('...Wait')
        }
        else {
            let firstName = InfoUser?.firstName;
            let lastName = InfoUser?.lastName;
            let Avatar = firstName+' '+lastName;

            console.log('avatar',Avatar)


            setAvatar(Avatar)
        }
    }, [InfoUser]);


    useEffect(() => {

        if (auth !== undefined) {

            console.log("authData", auth)
            setAuthData(auth)
        }
    }, [authData]);


    const styles = StyleSheet.create({

        Container: {
            backgroundColor: '#B0C4DE',
            flex: 1
        },

        Child: {
            flex: 2,
            backgroundColor: '#778899',
            marginTop: 150,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },

        Avatar: {
            marginTop: -45,
            left: '39%',

        },

        Firstame: {
            marginTop: 100,
            marginLeft: 20,
            fontSize: 20
        },

        Lastname: {
            marginTop: 50,
            marginLeft: 20,
            fontSize: 20
        },

        Email: {
            marginTop: 50,
            marginLeft: 20,
            fontSize: 20
        },

        Logout: {
            marginTop: 50,
            marginLeft: 20,
            fontSize: 20
        }

    })


    return (

        <View style={styles.Container} >

            <View style={styles.Child}>
                <Avatar style={styles.Avatar} label={avatar} autoColor size={100} />


                <Text style={styles.Firstame}>Firstame : {InfoUser?.firstName}</Text>
                <Text style={styles.Lastname}>Lastname : {InfoUser?.lastName}</Text>
                <Text style={styles.Email}>Email : {InfoUser?.email}</Text>



                {/* <Pressable onPress={() => setAuthData("0")}  > */}
                <Pressable onPress={() => setAuth("0")} style={styles.Logout}  >

                    <Text>  Logout </Text>

                </Pressable>

            </View>
        </View>

    )
}

export default Profile;