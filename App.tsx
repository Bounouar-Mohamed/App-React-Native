import * as React from 'react'
import { View, StyleSheet, Pressable, Text, ViewStyle, TextStyle, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Acceuil from "./App/Pages/Acceuil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './App/Pages/Profile';
import HomeScreen from './App/Pages/HomeScreen';
import UserProvider from "./App/Contextes/ProfileContexte";
import { UserContext } from './App/Contextes/ProfileContexte';
import PasswordProvider, { PasswordContext } from "./App/Contextes/PasswordContexte";
import AuthProvider from "./App/Contextes/AuthContext";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./App/Contextes/AuthContext";
import { Avatar } from "@react-native-material/core";
import FormsPage from "./App/Apploye/organisms/FormsPage";


interface ShowModalProps {
  text: string;
  children: React.ReactNode | React.ReactNode[];
}


const App = (props: ShowModalProps) => {

  const [status, setStatus] = useState<string>("");



  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();




  const Auth = useContext(AuthContext);
  const AvatarProfile = useContext(UserContext);


  // useEffect(() => {

  //   if (status !== undefined) {

  //     console.log("authData", status)
  //     setAuthData(status)
  //   }
  // }, [status]);




  const Style = StyleSheet.create({

    Container: {
      flex: 1

    }
  })

  console.log('App', AvatarProfile?.firstName)



  return (
    <View style={Style.Container}>
      <PasswordProvider>
        <UserProvider>
          <AuthProvider>
            <NavigationContainer {...props}>



              {/* {Auth?.authData === "1" ?
                <Stack.Navigator {...props}>

                  <Stack.Screen name="home" component={HomeScreen} options={{
                    headerShown: false
                  }} />
                  <Stack.Screen name="login" component={FormsPage} options={{
                    headerShown: true,
                    headerTintColor: '#ffffff',
                    headerTransparent: true,
                    headerBackTitle: 'name',
                    headerTitle: "",


                  }} />

                </Stack.Navigator> */}

              {/* : */}

              <Tab.Navigator  {...props} screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                // headerStyle: {
                //   backgroundColor: '#96e5e8'
                // },
                headerTitleAlign: 'center',
                headerTransparent: true,
                tabBarStyle: {
                  position: 'absolute',
                  backgroundColor: '#96e5e8',
                  bottom: 25,
                  height: '8%',
                  left: '5%',
                  right: '5%',
                  marginTop: '-10%',
                  borderRadius: 15
                },

                tabBarButton: [
                  "acceuil",
                  "login"
                ].includes(route.name)
                  ? () => {
                    return null;
                  }
                  : undefined,
              })}>


                <Tab.Screen name="acceuil" component={HomeScreen} options={{
                  headerShown: false,
                  tabBarStyle: { display: "none" },

                }} />


                <Tab.Screen name="login" component={FormsPage} options={{
                  headerShown: false,
                  tabBarStyle: { display: "none" },
                  headerTransparent: true,

                }} />


                <Tab.Screen name="Amazon" component={Acceuil} options={{

                  tabBarIcon: () => (
                    <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                      <ImageBackground source={require('./App/Assets/home-free-icon-font.png')} style={{ width: 30, height: 30 }} resizeMode='contain' />
                    </View>),


                }}
                />

                <Tab.Screen name="Profile" component={Profile} options={{
                  
                  headerShown: false,

                  tabBarIcon: () => (
                    <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                      <ImageBackground source={require('./App/Assets/user-free-icon-font.png')} style={{ width: 30, height: 30 }} resizeMode='contain' />
                    </View>),


                }} />

              </Tab.Navigator>

              {/* } */}

            </NavigationContainer>
          </AuthProvider>
        </UserProvider>
      </PasswordProvider>
    </View>
  );
};


export default App;