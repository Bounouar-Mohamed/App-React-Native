import * as React from 'react'
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';



export default function Footer() {

    const { t, i18n } = useTranslation();


    return (

        <View>
            <Text>{t("footer.0")}</Text>
        </View>

    )
}