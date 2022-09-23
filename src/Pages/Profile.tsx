import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View, ImageBackground, Dimensions, Alert } from 'react-native';
import { UserContext } from '../Contextes/ProfileContexte';
import { useState } from 'react';
import { Avatar } from "@react-native-material/core";
import { useTranslation } from 'react-i18next';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import Config from 'react-native-config';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



type mainScreenProp = StackNavigationProp<'Main'>;



export interface profileAvatar {

    avatar: any

};


export interface Update {

    firstname: any
    lastname: any

};

// ------------------------------------------                                 ajouter un moyen de refresh la page                     --------------------------------------------------



const Profile = () => {


    const InfoUser = useContext(UserContext);

    const [avatar, setAvatar] = useState<profileAvatar | any>()
    const [isModalVisible, setModalVisible] = useState(false);
    const [editable, setEditable] = useState(false)
    const [dots, setDots] = useState(false)
    const [firstName, setfirstName] = useState<Update | any>(InfoUser?.firstName)
    const [lastName, setLastName] = useState<Update | any>(InfoUser?.lastName)


    const navigation = useNavigation<mainScreenProp>();


    let DATA: any = [
        { id: 1, title: 'Firstname : ' + firstName },
        { id: 2, title: 'Lastname : ' + lastName },
        { id: 3, title: 'Email : ' + InfoUser?.email }
    ]


    useEffect(() => {

        if (InfoUser === undefined) {
            console.log('...Wait')
        }
        else {
            let firstName = InfoUser?.firstName;
            let lastName = InfoUser?.lastName;
            let Avatar = firstName + ' ' + lastName;


            setAvatar(Avatar)
        }
    }, [InfoUser]);



    const Item = ({ title }: any) => (
        <View style={{ padding: 20 }} >
            <Text style={{ color: '#FFFFFF', fontSize: 20 }} >{title}</Text>
        </View>
    );



    const renderItem = ({ item }: any) => (
        <Item title={item.title} />
    );



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        console.log('heeeehooooo')
    };



    const Logout = () => {
        setModalVisible(!isModalVisible);
        navigation.navigate('frontcover')
    };



    const deleteAccount = () => {

        let id = { id: InfoUser?.idUser }
        console.log('id Post', id)
        const url_delete = Config.API_URL + '/delete'

        axios.post(url_delete, id)
            .then(resp => {

                if (resp.data.message.lenght !== 0) {
                    Alert.alert("Compte Supprimer !")
                    navigation.navigate('acceuil')
                }
            })
    }



    const Update = () => {

        let user = { id: InfoUser?.idUser, firstname: firstName, lastname: lastName }
        setEditable(!editable)

        console.log('id Post', user.id)
        const url_update = Config.API_URL + '/update'

        axios.post(url_update, user)
            .then(resp => {
                console.log(resp)
            })
    }

    const { t, i18n } = useTranslation();



    return (

        <View style={styles.Container} >
            <View style={styles.Child}>

                <Avatar style={styles.Avatar} label={avatar} color={'#121c47'} size={100} />


                <Pressable onPress={() => setDots(true)} style={styles.Logout}>

                    <ImageBackground source={require('../Assets/menu-dots-vertical-free-icon-font.png')} style={styles.LogoutIcon} resizeMode='contain' />

                </Pressable>

                <Pressable onPress={() => setEditable(!editable)} style={styles.Editable} >

                    <ImageBackground source={require('../Assets/editable.jpg')} style={styles.EditIcon} resizeMode='contain' />

                </Pressable>

                <Modal isVisible={dots}>
                    <View style={styles.ModalLogout}>

                        <Pressable onPress={() => deleteAccount()}>
                            <Text style={{ color: '#FFFFFF', fontSize: 20 }}> Delete Account </Text>
                        </Pressable>

                        <Text style={{ color: "#ffffff", top: '-15%' }} > ─────────────────────────────────    </Text>
                       
                        <Pressable onPress={() => Logout()}>
                            <Text style={{ color: '#FFFFFF', fontSize: 20, top: '-50%' }}> Logout </Text>
                        </Pressable>

                        <View style={styles.ChildModalLogout}>

                            <Pressable onPress={() => setDots(false)}>
                                <Text style={{ color: '#121c47', fontSize: 20 }}> Cancel</Text>
                            </Pressable>

                        </View>

                    </View>
                </Modal>

                <SafeAreaView style={{ top: '10%', left: '5%' }} >
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={InfoUser?.lastName}

                    />
                </SafeAreaView>


                {editable === true ?

                    <Modal isVisible={editable}>
                        <View style={styles.ModalUpdate}>

                            <Text style={{ marginTop: '10%', fontSize: 20, color: '#FFFFFF' }}> Firstname:</Text>
                            <TextInput
                                style={{
                                    color: '#FFFFFF',
                                    height: 40,
                                    width: 320,
                                    margin: 12,
                                    padding: 10,
                                    borderBottomWidth: 1,
                                    borderColor: '#ffffff',
                                }}
                                defaultValue={InfoUser?.firstName}
                                onChangeText={setfirstName}

                            />

                            <Text style={{ fontSize: 20, color: '#FFFFFF', top: '10%' }}> Lastname:</Text>

                            <TextInput

                                style={{
                                    top: '10%',
                                    color: '#FFFFFF',
                                    height: 40,
                                    width: 320,
                                    margin: 12,
                                    padding: 10,
                                    borderBottomWidth: 1,
                                    borderColor: '#ffffff',
                                }}
                                defaultValue={InfoUser?.lastName}
                                onChangeText={setLastName}

                            />

                            <View style={styles.ChildModalUpdate}>
                                <Pressable onPress={() => setEditable(!editable)}>
                                    <Text style={{ color: '#121c47', fontSize: 20 }}>{t("Modal.1")} </Text>
                                </Pressable>

                                <Pressable onPress={Update}>
                                    <Text style={{ color: '#121c47', fontSize: 20 }}> {t("Modal.2")}</Text>
                                </Pressable>
                            </View>

                        </View>
                    </Modal>

                    : <></>}

            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    Container: {
        backgroundColor: '#96e5e8',
        flex: 1
    },

    Child: {
        flex: 2,
        backgroundColor: '#121c47',
        marginTop: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    Avatar: {
        marginTop: -45,
        left: '39%',

    },

    Lastname: {
        marginTop: '-2.5%',
        marginLeft: 20,
        fontSize: 20,
        color: '#ffffff'
    },

    Firstname: {

        marginTop: '-2.5%',
        marginLeft: 20,
        fontSize: 20,
        color: '#ffffff'
    },

    Email: {
        marginTop: '10%',
        marginLeft: '5%',
        fontSize: 20,
        color: '#ffffff'
    },

    LogoutText: {

        color: '#ffffff'
    },

    Logout: {

        position: 'absolute',
        top: '5%',
        left: '80%',
        height: 40,
        width: 100,
    },

    LogoutIcon: {

        height: '90%',
        width: '90%',
    },

    Editable: {

        position: 'absolute',
        top: '5%',
        height: 40,
        width: 100,
    },

    EditIcon: {

        height: '90%',
        width: '90%',
    },

    ModalUpdate: {

        padding: 15,
        borderRadius: 10,
        minHeight: '50%',
        height: '50%',
        backgroundColor: '#121c47',
    },

    ModalLogout: {

        borderRadius: 10,
        padding: 20,
        height: '20%',
        backgroundColor: '#121c47',
    },

    ChildModalLogout: {

        marginTop: '0%',
        height: '30%',
        borderRadius: 10,
        backgroundColor: '#96e5e8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
    },

    ChildModalUpdate: {

        marginTop: '20%',
        height: '10%',
        borderRadius: 10,
        backgroundColor: '#96e5e8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
    },

    ButtonModal: {
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
    }
})

export default Profile;