import DashboardPhone from "./App/Apploye/templates/DashboardPhone";
import * as React from 'react'
// import './App/Translation/i18n'
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Acceuil from "./App/Pages/Acceuil";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./App/Pages/Profile";
import UserProvider from "./App/Contextes/ProfileContexte";
import PasswordProvider, { PasswordContext } from "./App/Contextes/PasswordContexte";
import { Icon } from '@rneui/themed';
import { useContext, useState } from "react";
import { AuthContext } from "./App/Contextes/AuthContext";



const App = () => {


  const Tab = createBottomTabNavigator();

  const Auth = useContext(AuthContext);
  const User = useContext(PasswordContext);

  function Login() {
    return 0
}
  const Style = StyleSheet.create({

    Container: {


    }
  })


  return (
    <View style={{ flex: 1 }}>
      <PasswordProvider>
        <UserProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{
              tabBarActiveTintColor: '#e91e63',
            }}>

              {User?.Auth === false ?
                <Tab.Screen name="Login" component={DashboardPhone} options={{
                  tabBarIcon: () => (<Icon
                    name='rowing' />)
                }} />
                :
                <>
                  <Tab.Screen name="Amazon" component={Acceuil} options={{
                    tabBarIcon: () => (<Icon
                      name='rowing' />)
                  }} />
                  <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: () => (<Icon
                      name='rowing' />)
                  }} />
                </>
              }

            </Tab.Navigator>
          </NavigationContainer>
        </UserProvider>
      </PasswordProvider>
    </View>
  );
};


export default App;