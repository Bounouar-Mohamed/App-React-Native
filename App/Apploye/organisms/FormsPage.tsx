import * as React from 'react'
import { useState } from "react"
import { View, Text, StyleSheet } from 'react-native';
import ButtonSwitch from "../atoms/ButtonSwitch"
import PhoneLogin from "../moleculs/PhoneLogin"
import Registration from "../moleculs/Registration"


export default function FormsPage() {


    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }


    const styles = StyleSheet.create({

        Container: {
            flex:1,
            backgroundColor:'#121c47'

        }
    }
    )


    return (
        <View style={styles.Container}>


            <ButtonSwitch handleChange={toggler} />

            {toggle == false ?
                <PhoneLogin /> : <Registration tpassword={''} setTpassword={''} />}

        </View>
    )
}