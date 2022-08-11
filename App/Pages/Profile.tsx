import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthContext, Auth } from '../Contextes/AuthContext';
import { UserContext } from '../Contextes/ProfileContexte';
import { useState } from 'react';
import { Avatar } from "@react-native-material/core";



export interface profileAvatar {

    avatar: any

};

const Profile: React.FC = () => {


    const InfoUser = useContext(UserContext);
    const { setAuthData, authData } = useContext(AuthContext);



    const [auth, setAuth] = useState('')
    const [avatar, setAvatar] = useState<profileAvatar | any>()



    useEffect(() => {

        if (InfoUser === undefined) {
            console.log('...Wait')
        }
        else {
            let firstName = InfoUser?.firstName;
            let lastName = InfoUser?.lastName;
            let Avatar = firstName + ' ' + lastName;


            setAvatar(Avatar)
        }
    }, [InfoUser]);


    useEffect(() => {

        if (auth !== undefined) {

            console.log("profile authData", authData)
            setAuthData(auth)
        }
    }, [auth]);


    const styles = StyleSheet.create({

        Container: {
            backgroundColor: '#96e5e8',
            flex: 1
        },

        Child: {
            flex: 2,
            backgroundColor: '#121c47',
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
            fontSize: 20,
            color: '#ffffff'
        },

        Lastname: {
            marginTop: 50,
            marginLeft: 20,
            fontSize: 20,
            color: '#ffffff'
        },

        Email: {
            marginTop: 50,
            marginLeft: 20,
            fontSize: 20,
            color: '#ffffff'
        },

        Logout: {
            marginTop: 50,
            marginLeft: 20,
            fontSize: 20,
            color: '#ffffff'

        },
        LogoutText: {

            color: '#ffffff'

        }

    })


    return (

        <View style={styles.Container} >
            <View style={styles.Child}>

                <Avatar style={styles.Avatar} label={avatar} color={'#121c47'} size={100} />


                <Text style={styles.Firstame}>Firstame : {InfoUser?.firstName}</Text>
                <Text style={styles.Lastname}>Lastname : {InfoUser?.lastName}</Text>
                <Text style={styles.Email}>Email : {InfoUser?.email}</Text>



                <Pressable onPress={() => setAuth("1")} style={styles.Logout}  >

                    <Text style={styles.LogoutText}>  Logout </Text>

                </Pressable>

            </View>
        </View>

    )
}

export default Profile;