export {}
// import * as React from 'react'
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { View, Text, Button, StyleSheet, Pressable } from 'react-native';




// export default function TranslationButton() {



//     const [currentLanguage, setLanguage] = useState('en');


//     const styles = StyleSheet.create({

//         Container: {
//             position: 'absolute',
//             width: 140,
//             height: 40,
//             marginTop: 50,
//             marginLeft: 0,
//             flexDirection: "row",
//             justifyContent: 'space-between',
//             backgroundColor: "#AEDFA1",
//             borderTopLeftRadius: 10,
//             borderBottomLeftRadius: 10,
//             borderTopRightRadius: 10,
//             borderBottomRightRadius: 10,
//         },


//         ButtonFr: {
//             position: 'relative',
//             width: 70,
//             borderTopLeftRadius: 10,
//             borderBottomLeftRadius: 10,
//             backgroundColor: currentLanguage === 'fr' ? "#48c029" : "#aedfa1",
//             borderTopRightRadius: currentLanguage === 'fr' ? 10 : 0,
//             borderBottomRightRadius: currentLanguage === 'fr' ? 10 : 0,
//         },
//         TextFr: {
//             marginLeft: 30,
//             top: 10,
//             color: currentLanguage === 'fr' ? "#ffffff" : "#000000"
//         },


//         ButtonEn: {
//             width: 70,
//             borderTopRightRadius: 10,
//             borderBottomRightRadius: 10,
//             backgroundColor: currentLanguage === 'en' ? "#48c029" : "#aedfa1",
//             borderTopLeftRadius: currentLanguage === 'en' ? 10 : 0,
//             borderBottomLeftRadius: currentLanguage === 'en' ? 10 : 0,

//         },
//         TextEn: {
//             marginLeft: 30,
//             top: 10,
//             color: currentLanguage === 'en' ? "#ffffff" : "#000000",
//         },
//     })

//     const changeLanguage = (value: string) => {
//         i18n
//             .changeLanguage(value)
//             .then(() => setLanguage(value))
//             .catch(err => console.log(err));
//     };

//     const { i18n } = useTranslation();

//     return (


//         <View style={styles.Container}>

//                 <Pressable onPress={() => changeLanguage('fr')} style={styles.ButtonFr}>

//                     <Text style={styles.TextFr}>FR</Text>

//                 </Pressable>


//                 <Pressable onPress={() => changeLanguage('en')} style={styles.ButtonEn}>

//                     <Text style={styles.TextEn}>EN</Text>

//                 </Pressable>

//         </View >

//     )
// }