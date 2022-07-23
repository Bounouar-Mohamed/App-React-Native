import { useState, useEffect } from 'react';
// import { Image } from 'semantic-ui-react'
// import img from '../Assets/Cartouche.jpg'
import { Popover } from '@ant-design/react-native';

import axios from 'axios';
import { Text, View, Linking, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle, StatusBar, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React from 'react';



function Acceuil() {



    const [Hovering, setHovering] = useState(" ")
    const [toHighlight, setToHighlight] = useState(0)


    useEffect(() => {

        if (toHighlight == 3) {
            console.log("3 taped")
        }

    }, [toHighlight])





    const HandleClick = (e: { target: { name: any; }; }) => {



        const data = {
            articles: e.target.name
        }
        console.log(data)

        axios.post('https://first-server-express.herokuapp.com/articles', data)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
                console.error('Something went wrong!', error);
            });


    }


    const styles = StyleSheet.create({

        Container: {

            flex: 1,
            paddingTop: StatusBar.currentHeight,

        },
        Article1: {
            // width: 200,
            // height: 200

            // borderStyle: toHighlight == 1 ? ' dotted ' : "",

        },
        Image1: {
            width: 200,
            height: 200

        },

        Article2: {
            // width: 200,
            // height: 200
            // borderStyle: toHighlight == 2 ? ' dotted ' : "",

        },
        Image2: {
            width: 200,
            height: 200

        },
        Article3: {
            // width: 200,
            // height: 200
            // borderStyle: toHighlight == 3 ? ' dotted ' : "",

        },
        Image3: {
            width: 200,
            height: 200

        },
        Article4: {
            // width: 200,
            // height: 200
            // borderStyle: toHighlight == 4 ? ' dotted ' : "",

        },
        Image4: {
            width: 200,
            height: 200

        },


    })

    const content = (
        <View>
            <Text>
                HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)
            </Text>
            <Text>
                23,95 €
            </Text>
        </View>
    );

    return (


        <View style={styles.Container}>
            <ScrollView >


                <Text >
                    Les meilleures ventes en Informatique :
                </Text>

                <View>


                    {/* <Popover content={content} title="Amazon" > */}
                    <View style={styles.Article1}>
                        {/* <Pressable onPress={HandleClick} style={styles.ButtonGoogle}> */}

                            <Image
                                style={styles.Image1}
                                source={require('../Assets/Cartouche.jpg')}

                            // onMouseOver={() => setToHighlight(1)}
                            />
                        {/* </Pressable> */}
                        <Text onPress={() => Linking.openURL('https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1')}>
                            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)

                            23,95 €
                        </Text>
                    </View>
                    {/* </Popover> */}



                    {/* <Popover overlay={content} title="Amazon" > */}
                    <View style={styles.Article2}>

                        <Image
                            style={styles.Image2}
                            source={require('../Assets/Cartouche.jpg')}
                        // width="200" height="200"
                        // onClick={HandleClick}
                        // onMouseOver={() => setToHighlight(2)}
                        />

                        <Text onPress={() => Linking.openURL('https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1')}>
                            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)

                            23,95 €
                        </Text>
                    </View>
                    {/* </Popover> */}



                    {/* <Popover content={content} title="Amazon" > */}
                    <View style={styles.Article3}>

                        <Image
                            style={styles.Image3}
                            source={require('../Assets/Cartouche.jpg')}
                        // width="200" height="200"
                        // onClick={HandleClick}
                        // onMouseOver={() => setToHighlight(3)}
                        />

                        <Text onPress={() => Linking.openURL('https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1')}>
                            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)

                            23,95 €
                        </Text>
                    </View>
                    {/* </Popover> */}



                    {/* <Popover content={content} title="Amazon" > */}
                    <View style={styles.Article4}>

                        <Image
                            style={styles.Image4}
                            source={require('../Assets/Cartouche.jpg')}
                        // width="200" height="200"
                        // onClick={HandleClick}
                        // onMouseOver={() => setToHighlight(4)}
                        />

                        <Text onPress={() => Linking.openURL('https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1')}>
                            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)

                            23,95 €
                        </Text>

                    </View>

                </View>
            </ScrollView>
        </View>

    )
}




export default Acceuil;
