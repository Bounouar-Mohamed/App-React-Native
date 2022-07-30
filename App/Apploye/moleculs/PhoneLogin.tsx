import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { Text, View, TextInput, Button, Alert, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";
import PostLogin from '../../Services/PostLogin';
import { useCookies } from "react-cookie";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contextes/ProfileContexte';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contextes/AuthContext';
import { PasswordContext } from '../../Contextes/PasswordContexte';
import async from '../../Services/GetProfile';


export type UserConnectForm = {

    email: string;
    password: string;

};

type User = {

    firstname: string;
    lastname: string;
    email: string;
}

export default function PhoneLogin () {

    const InfoUser = useContext(UserContext);
    const { setAuthData } = useContext(AuthContext);




    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    // const [cookies, setCookie] = useCookies();
    const [user, setUser] = useState<User>()


    // const navigation = useNavigation<any>();

    const submitLogin = (data: UserConnectForm) => {

        resetField("email");
        resetField("password");
        console.log(data)


        PostLogin(data).then(response => {

            // setCookie(response.data.user[0].nom, {
            //     path: "/",
            //     // expires: tomorrow
            // });


            if (response.data.message == "Login") {

                setUser(response.data.user[0])
                console.log("login")
                setAuthData('1')
                // navigation.navigate('Profile')
 
            }
            else {

                let error = "Email ou Mot de passe incorrect !!"
                // console.log(error)
                // Alert.alert(error)
            }

        }).catch(error => {
            console.error('Something went wrong!', error);

        })
    }

    useEffect(() => {

        if (user !== undefined) {

            console.log("user", user)
            InfoUser?.setFirstName(user!.firstname)
            InfoUser?.setLastName(user!.lastname)
            InfoUser?.setEmail(user!.email)

        }
        console.log('yyyessss')
    }, [user]);





    const styles = StyleSheet.create({
        Container: {
            alignItems: 'center',
            position: 'absolute',
            marginTop: 250,
            marginLeft: 20
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
            marginTop: 40,
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
    })



    const { t, i18n } = useTranslation();


    return (

        <View style={styles.Container}>


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
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.Password}
                        placeholder={t('Password.0')}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />

            {errors.password && <Text style={styles.ErrorPassword}>Enter your password!</Text>}



            <Pressable onPress={handleSubmit(submitLogin)} style={styles.ButtonSubmit}>

                <Text style={styles.TextSubmit}>{t('Button.0')}</Text>

            </Pressable>


            <Pressable onPress={handleSubmit(submitLogin)} style={styles.ButtonGoogle}>

                <ImageBackground source={require('./../../Assets/Google.png')} style={styles.BackgroundGoogle} resizeMode='contain' />
                <Text style={styles.TextGoogle}>{t('ButtonGoogle.1')}</Text>

            </Pressable>

        </View>


    )
}