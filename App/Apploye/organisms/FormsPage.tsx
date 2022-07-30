import * as React from 'react'
import { useState } from "react"
import { View, Text } from "react-native"
import ButtonSwitch from "../atoms/ButtonSwitch"
import PhoneLogin from "../moleculs/PhoneLogin"
import Registration from "../moleculs/Registration"


export default function FormsPage() {


    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    console.log('toggle', toggle)



    return (
        <View>

                <ButtonSwitch handleChange={toggler} />

                {toggle == false ?
                    <PhoneLogin /> : <Registration tpassword={''} setTpassword={''}/>}

        </View>
    )
}