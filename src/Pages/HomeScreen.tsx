import * as React from 'react'
import { Button, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import TranslationButton from "../Translation/TranslationButton";
import { useTranslation } from "react-i18next";
import Config from "react-native-config";




export default function frontCover(props: any) {

    // const navigation = useNavigation();

    const styles = StyleSheet.create({

        Container: {

            flex: 1,
            backgroundColor: '#121c47'
        },

        Logo: {

            top: '20%',
            height: 300,
            width: '100%'
        },

        Button: {

            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            position: 'relative',
            backgroundColor: '#96e5e8',
            alignItems: 'center',
            width: 200,
            left: '25%',
            top: '30%'

        },

        buttonText: {

            fontSize: 30,
            color: '#121c47'

        },

        TextTranslate: {

            fontSize: 15,
            top: '48%',
            color: '#ffffff'
        },

        TranslationButton: {

            justifyContent: 'flex-end',
            top: '48.5%',
            left: '40%'
        }

    })


    const { t, i18n } = useTranslation();

    return (


        <View style={styles.Container}>

            <Image
                style={styles.Logo}
                source={require('../Assets/logo-MB.png')}
                resizeMode="contain"
            />

            <TouchableOpacity
                style={styles.Button}
                onPress={() => props.navigation.navigate('login')}
            >
                <Text style={styles.buttonText}>Connexion</Text>

            </TouchableOpacity>


            <Text style={styles.TextTranslate}> {t("switchLanguage.0")}</Text>


            <View style={styles.TranslationButton}>

                <TranslationButton />

            </View>

        </View>
    )
}
