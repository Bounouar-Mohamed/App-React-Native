import * as React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import * as i18n from 'i18next'




export default function TranslationButton() {



    const [currentLanguage, setLanguage] = useState('en');


    const styles = StyleSheet.create({

        Container: {
            position: 'absolute',
            width: 100,
            height: 25,
            marginTop: 50,
            marginLeft: 0,
            flexDirection: "row",
            justifyContent: 'space-between',
            backgroundColor: "#154c79",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        },


        ButtonFr: {
            position: 'relative',
            width: 50,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: currentLanguage === 'fr' ? "#96e5e8" : "#154c79",
            borderTopRightRadius: currentLanguage === 'fr' ? 10 : 0,
            borderBottomRightRadius: currentLanguage === 'fr' ? 10 : 0,
        },
        TextFr: {
            marginLeft: 15,
            top: 2,
            color: currentLanguage === 'fr' ? "#121c47" : "#121c47"
        },


        ButtonEn: {
            width: 50,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: currentLanguage === 'en' ? "#96e5e8" : "#154c79",
            borderTopLeftRadius: currentLanguage === 'en' ? 10 : 0,
            borderBottomLeftRadius: currentLanguage === 'en' ? 10 : 0,

        },
        TextEn: {
            marginLeft: 15,
            top: 2,
            color: currentLanguage === 'en' ? "#121c47" : "#121c47",
        },
    })

    const changeLanguage = (value: string) => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };

    // const changeLanguage = (lng: string | undefined) => {
    //     i18n.changeLanguage(lng)
    // }
    const { i18n } = useTranslation();

    return (


        <View style={styles.Container}>

                <Pressable onPress={() => changeLanguage('fr')} style={styles.ButtonFr}>

                    <Text style={styles.TextFr}>FR</Text>

                </Pressable>


                <Pressable onPress={() => changeLanguage('en')} style={styles.ButtonEn}>

                    <Text style={styles.TextEn}>EN</Text>

                </Pressable>

        </View >

    )
}