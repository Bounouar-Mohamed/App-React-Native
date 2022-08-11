import * as React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Acceuil from "./App/Pages/Acceuil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./App/Pages/Profile";
import HomeScreen from "./App/Pages/HomeScreen";
import UserProvider from "./App/Contextes/ProfileContexte";
import { UserContext } from './App/Contextes/ProfileContexte';
import PasswordProvider, { PasswordContext } from "./App/Contextes/PasswordContexte";
import AuthProvider from "./App/Contextes/AuthContext";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./App/Contextes/AuthContext";
import { Avatar } from "@react-native-material/core";
import { profileAvatar } from './App/Pages/Profile';
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



              {Auth?.authData === "0" ?
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

                </Stack.Navigator>

                :

                <Tab.Navigator {...props}>


                  <Tab.Screen name="Amazon" component={Acceuil}
                  //  options={{ tabBarIcon: ({ color }) => ( <Icon name="home" color={color} size={26} />),}} 
                  />

                  <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: () => (<Avatar label={AvatarProfile?.Avatar} autoColor size={35} />)
                  }} />
                </Tab.Navigator>

              }

            </NavigationContainer>
          </AuthProvider>
        </UserProvider>
      </PasswordProvider>
    </View>
  );
};


export default App;