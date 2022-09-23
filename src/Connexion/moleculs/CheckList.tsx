import { useContext, useEffect, useState } from 'react';
import { PasswordContext } from '../../Contextes/PasswordContexte';
import { Translation, useTranslation } from "react-i18next";
import { View, Text, Pressable } from 'react-native';
import * as React from 'react'
import { AuthContext } from '../../Contextes/AuthContext';





export default function CheckList() {


    const { password } = useContext(PasswordContext);


    const [lenght, setLenght] = useState<string | number>("")


    useEffect(() => {

        if (password !== undefined) {
            setLenght(password.length);
        }
    }, [password])


    function containsNumber(str: any) {
        return /[0-9]/.test(str);
    }


    let regExp = /[a-zA-Z]/
    let specialChars = /[`\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/


    const { t, i18n } = useTranslation();


    return (

        <View>
            <Text style={{ color: regExp.test(password) ? "#008000" : '#FF0000' }}>{t("CheckList.0")}</Text>
            <Text style={{ color: lenght >= 6 ? "#008000" : '#FF0000' }}>{t("CheckList.1")}</Text>
            <Text style={{ color: specialChars.test(password) ? "#008000" : '#FF0000' }}>{t("CheckList.2")}</Text>
            <Text style={{ color: containsNumber(password) ? "#008000" : '#FF0000' }}>{t("CheckList.3")}</Text>
        </View>


    )
}