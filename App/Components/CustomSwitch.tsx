import  {useState} from 'react'; 
import {StyleSheet, Text, View, TouchableOpacity, ColorValue} from 'react-native';
import * as React from 'react'
 



export interface toogle {

    selectionMode: any,
    roundCorner: any,
    option1: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,
    option2: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,
    onSelectSwitch: (arg0: any) => void,
    selectionColor: ColorValue | undefined

}

const CustomSwitch = (props:toogle) => {
    const [getSelectionMode, setSelectionMode] = useState(props.selectionMode);
    const [getRoundCorner, setRoundCorner] = useState(props.roundCorner);

    const updatedSwitchData = (val: number) => {
        setSelectionMode(val);
        props.onSelectSwitch(val);
    };

    return (

        <View>
            <View
                style={{
                    height: 44,
                    width: 215,
                    backgroundColor: '#aedfa1',
                    borderRadius: getRoundCorner ? 25 : 0,
                    borderWidth: 0,
                    borderColor: props.selectionColor,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 2,
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(1)}
                    style={{
                        flex: 1,

                        backgroundColor: getSelectionMode == 1 ? props.selectionColor : '#aedfa1',
                        borderRadius: getRoundCorner ? 25 : 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: getSelectionMode == 1 ? 'white' : '#000000',
                        }}>
                        {props.option1}
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity

                    activeOpacity={1}
                    onPress={() => updatedSwitchData(2)}
                    style={{
                        flex: 1,

                        backgroundColor: getSelectionMode == 2 ? props.selectionColor : '#aedfa1',
                        borderRadius: getRoundCorner ? 25 : 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: getSelectionMode == 2 ? 'white' : '#000000',
                        }}>
                        {props.option2}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CustomSwitch;