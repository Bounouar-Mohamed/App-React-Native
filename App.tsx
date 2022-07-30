import DashboardPhone from "./App/Apploye/templates/DashboardPhone";
import * as React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Acceuil from "./App/Pages/Acceuil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./App/Pages/Profile";
import UserProvider from "./App/Contextes/ProfileContexte";
import PasswordProvider, { PasswordContext } from "./App/Contextes/PasswordContexte";
import AuthProvider from "./App/Contextes/AuthContext";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./App/Contextes/AuthContext";
// import { Icon,IconComponentProvider } from "@react-native-material/core";
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Avatar } from "@react-native-material/core";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const App = () => {

  const [status, setStatus] = useState<string>("");



  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();


  const Auth = useContext(AuthContext);


  useEffect(() => {

    if (status !== undefined) {

      console.log("authData", status)
      // setAuthData(status)
    }
  }, [status]);




  const Style = StyleSheet.create({

    Container: {
      flex: 1

    }
  })



  return (
    <View style={Style.Container}>
      <PasswordProvider>
        <UserProvider>
          <AuthProvider>
            <NavigationContainer>
              {/* 
              <Pressable onPress={() =>  Auth.setAuthData("1") }>
                <Text>
                  Logout
                </Text>
              </Pressable>



              {status === "0" ?
                <Stack.Navigator>

                  <Stack.Screen name="Login" component={DashboardPhone} />

                </Stack.Navigator>

                : */}

              <Tab.Navigator>
                <Tab.Screen name="Login" component={DashboardPhone} options={{

                  tabBarLabel: "Home",
                  // tabBarIcon: ({ tintColor }: any) => (<Icon name="comments" size={30} color="#900" />)
                }} />
                <Tab.Screen name="Amazon" component={Acceuil} options={{
                  // tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),

                }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                  // tabBarIcon: () => (<Avatar label={'MB'} autoColor size={50} />)
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