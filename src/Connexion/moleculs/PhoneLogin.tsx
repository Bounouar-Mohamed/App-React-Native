import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { Text, View, TextInput, Button, Alert, StyleSheet, Pressable, ActivityIndicator, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";
import PostLogin from '../../Services/PostLogin';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contextes/ProfileContexte';
import { AuthContext } from '../../Contextes/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type mainScreenProp = StackNavigationProp<'Main'>;

export type UserConnectForm = {

    email: string;
    password: string;

};


type User = {

    users_id: any
    firstname: string;
    lastname: string;
    email: string;
}

function PhoneLogin(this: any) {

    const navigation = useNavigation<mainScreenProp>();

    // const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User>()

    const InfoUser = useContext(UserContext);


    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    // useEffect(() => {

    //     if (isLoading == true) {

    //         setTimeout(() => {
    //             navigation.navigate('profile')
    //             setIsLoading(false);
    //         }, 5000);
    //     }

    // }, []);


    const submitLogin = (data: UserConnectForm) => {

        resetField("email");
        resetField("password");
        console.log(data)



        PostLogin(data).then(response => {


            if (response.data.message == "Login") {

                // setIsLoading(true)
                setUser(response.data.user[0])
                navigation.navigate('Profile')

            }
            else {

                let error = "Email ou Mot de passe incorrect !!"
                // console.log(error)
                Alert.alert(error)
            }

        }).catch(error => {
            console.error('Something went wrong!', error);

        })
    }

    useEffect(() => {

        if (user !== undefined) {
            console.log('unoooo', user!.users_id)

            console.log("user", user)
            InfoUser?.setIdUser(user!.users_id)
            InfoUser?.setFirstName(user!.firstname)
            InfoUser?.setLastName(user!.lastname)
            InfoUser?.setEmail(user!.email)

        }
    }, [user]);


    const { t, i18n } = useTranslation();

    // if (isLoading == true) {

    //     return (

    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     )
    // }

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
                        placeholderTextColor="#ffffff"
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
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
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


            <Pressable onPress={() => this.props.navigation.navigate('profile')} style={styles.ButtonGoogle}>


                <ImageBackground source={require('./../../Assets/Google.png')} style={styles.BackgroundGoogle} resizeMode='contain' />
                <Text style={styles.TextGoogle}>{t('ButtonGoogle.1')}</Text>

            </Pressable>

        </View>
        // 

    )
}
export default PhoneLogin;





const styles = StyleSheet.create({
    Container: {
        // backgroundColor:'#121c47',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 290,
        marginLeft: 20
    },

    Email: {
        height: 40,
        width: 320,
        margin: 12,
        border: 'none',
        borderColor: '#ffffff',
        color: '#ffffff',
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
        borderColor: '#ffffff',
        color: '#ffffff',

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
        backgroundColor: '#96e5e8',
    },

    TextSubmit: {
        textAlign: 'center',
        marginTop: 10,
        color: '#121c47',
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
