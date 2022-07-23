import { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from 'react'
import CustomSwitch from "../../Components/CustomSwitch";







export interface toogle {

    handleChange: any
}


export default function ButtonSwitch(props: toogle) {




    const styles = StyleSheet.create({


        Container: {

            position: 'absolute',
            width: 180,
            height: 40,
            marginTop: 80,
            marginLeft: 50,
        },

    })

    const { t, i18n } = useTranslation();


    return (


        <View style={styles.Container}>

                <View style={{ alignItems: 'center', margin: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        roundCorner={true}
                        option1={t("SignIn.0")}
                        option2={t("SignUp.0")}
                        onSelectSwitch={props.handleChange}
                        selectionColor={'#48c029'} />
                </View>

        </View>

    )
}