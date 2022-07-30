import * as React from 'react'
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordContext } from '../../Contextes/PasswordContexte';
import { Text, View, TextInput, Alert, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import Footer from '../atoms/Footer';
import CheckList from './CheckList';
import axios from 'axios';
import { UserContext } from '../../Contextes/ProfileContexte';
import { AuthContext } from '../../Contextes/AuthContext';



export interface Password {

    tpassword: string,
    setTpassword: string

};

export type UserConnectForm = {

    email: string;
    firstName: string;
    lastName: string;
    password: string;

};

type Profile = {

    firstname: string;
    lastname: string;
    email: string;

}



export default function Registration(props: Password) {


    const { control, handleSubmit, formState: { errors } } = useForm<UserConnectForm>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });
    const { setPassword, setEmail } = useContext(PasswordContext);
    const [tpassword, setTpassword] = useState<Password>()
    const [temail, setTemail] = useState<Password>()
    const [user, setUser] = useState<Profile>()




    // const navigation = useNavigation<any>();

    const InfoUser = useContext(UserContext);
    const Auth = useContext(AuthContext);



    useEffect(() => {

        if (tpassword !== undefined) {

            console.log("not undefined")
            setPassword(tpassword)
            setEmail(temail)
            console.log('test', tpassword)

        }
    }, [tpassword])


    const submitLogin = async (data: UserConnectForm) => {


        axios.post('https://first-server-express.herokuapp.com/users', data)

            .then(response => {
                if (response.data.message == "Login") {

                    console.log("Login")
                    // navigation.navigate('Profile')
                    // Auth?.setAuthData("1")
                }
                else {
                    Alert.alert("Email déjà existant !!")
                }

            }).catch(error => {
                console.error('Something went wrong!', error);
            });


        axios.get("https://first-server-express.herokuapp.com/profile")
            .then(resp => {

                setUser(resp.data.rows[0])
            })
            .catch(err => { console.log("erreur:", err) })

    }


    useEffect(() => {

        if (user !== undefined) {

            console.log("user", user)
            InfoUser?.setFirstName(user!.firstname)
            InfoUser?.setLastName(user!.lastname)
            InfoUser?.setEmail(user!.email)
        }
        console.log('uussseerrrrrrrrrr')

    }, [user]);


    const styles = StyleSheet.create({
        Container: {
            alignItems: 'center',
            position: 'absolute',
            marginTop: 250,
            marginLeft: 20
        },
        AlignedItem: {
            position: 'absolute',
            marginTop: -50,
            flexDirection: "row",

        },
        firstName: {
            height: 40,
            width: 150,
            left: -10,
            borderBottomWidth: 1,
        },

        lastName: {
            height: 40,
            width: 150,
            left: 10,
            borderBottomWidth: 1,
        },
        ErrorlastName: {
            color: '#FF0000',
            top: 60,
            marginLeft: -140

        },
        Email: {
            height: 40,
            width: 320,
            margin: 12,
            border: 'none',
            padding: 10,
            borderBottomWidth: 1,
        },
        ErrorEmail: {
            color: '#FF0000'
        },
        Password: {
            height: 40,
            width: 320,
            margin: 12,
            padding: 10,
            borderBottomWidth: 1,
        },
        ErrorPassword: {
            color: '#FF0000'
        },
        ButtonSubmit: {
            borderRadius: 10,
            height: 40,
            marginTop: 10,
            width: 200,
            borderWidth: 1,
            backgroundColor: '#48C029',
        },
        TextSubmit: {
            textAlign: 'center',
            marginTop: 10,
            color: '#ffffff',
        },

        ButtonGoogle: {

            flexDirection: "row",
            borderRadius: 10,
            height: 40,
            marginTop: 15,
            width: 200,
            borderWidth: 1,
            backgroundColor: '#ffffff',

        },

        BackgroundGoogle: {
            marginTop: 3,
            marginLeft: -50,
            height: '90%',
            width: '90%'

        },

        TextGoogle: {

            textAlign: 'center',
            marginLeft: -80,
            marginTop: 10,
            fontSize: 12,
            color: '#000000',
        },

        CheckList: {
            textAlign: 'center',
            marginTop: 10,
            color: '#000000',

        },
        
        Footer: {
            position: 'absolute',
            height: 70,
            width: 400,
            marginTop: 470,
            color: '#000000',
            backgroundColor: '#efefef',
            alignItems: 'center'
        },
    })

    const { t, i18n } = useTranslation();


    return (


        <View style={styles.Container}>

            <View style={styles.AlignedItem}>

                <Controller
                    control={control}

                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.firstName}
                            placeholder={t('FirstName.0')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="firstName"
                />


                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.lastName}
                            placeholder={t('LastName.0')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="lastName"
                />
                {errors.lastName && <Text style={styles.ErrorlastName}>Enter your lastName !</Text>}

            </View>

            <Controller
                control={control}
                rules={{
                    required: true,
                    validate: (value) =>
                        value.includes('@') || "Veuillez inclure '@'",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.Email}
                        placeholder="E-mail..."
                        onBlur={onBlur}
                        onChangeText={onChange}

                        // onChangeText={(value: any) => setTemail(value)}
                        value={value}
                    />
                )}
                name="email"
            />
            {errors.email && <Text style={styles.ErrorEmail}>Enter your email !</Text>}



            <Controller
                control={control}
                rules={{
                    required: true,
                    maxLength: 20,
                }}
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput
                        style={styles.Password}
                        placeholder={t('Password.0')}
                        secureTextEntry={true}
                        onBlur={onBlur}
                        value={value}
                        onChangeText={(value: any) => { onChange(value); setTpassword(value); }}
                    />
                )}
                name="password"
            />

            {errors.password && <Text style={styles.ErrorPassword}>Enter your password!</Text>}


            <View style={styles.CheckList}>

                <CheckList />

            </View>


            <Pressable onPress={handleSubmit(submitLogin)} style={styles.ButtonSubmit}>

                <Text style={styles.TextSubmit}>{t('Button.0')}</Text>

            </Pressable>


            <Pressable onPress={handleSubmit(submitLogin)} style={styles.ButtonGoogle}>

                <ImageBackground source={require('./../../Assets/Google.png')} style={styles.BackgroundGoogle} resizeMode='contain' />
                <Text style={styles.TextGoogle}>{t('ButtonGoogle.1')}</Text>

            </Pressable>


            <View style={styles.Footer}>

                <Footer />

            </View>

        </View>

    )
}
