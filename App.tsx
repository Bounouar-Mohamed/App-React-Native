import * as React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/Pages/Profile';
import UserProvider from "./src/Contextes/ProfileContexte";
import { UserContext } from './src/Contextes/ProfileContexte';
import PasswordProvider from "./src/Contextes/PasswordContexte";
import AuthProvider from "./src/Contextes/AuthContext";
import { useContext } from "react";
import FormsPage from "./src/Connexion/organisms/FormsPage";
import Home from './src/Netflix/Home';
import frontCover from './src/Pages/HomeScreen';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import  todoSlices  from "./src/feature/todoList";




interface ShowModalProps {
  text: string;
  children: React.ReactNode | React.ReactNode[];
}


export const store = configureStore({

  reducer: {
    todos: todoSlices
  },
});


const App = (props: ShowModalProps) => {


  const Tab = createBottomTabNavigator();

  const AvatarProfile = useContext(UserContext);


  return (
    <View style={Style.Container}>
      <PasswordProvider>
        <UserProvider>
          <AuthProvider>
            <Provider store={store}>
              <NavigationContainer {...props}>


                <Tab.Navigator  {...props} screenOptions={({ route }) => ({
                  tabBarShowLabel: false,
                  // headerStyle: {
                  //   backgroundColor: '#96e5e8'
                  // },
                  headerTitleAlign: 'center',
                  headerTransparent: true,
                  headerTintColor: '#121c47',
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
                    "frontcover",
                    "login"
                  ].includes(route.name)
                    ? () => {
                      return null;
                    }
                    : undefined,
                })}>


                  <Tab.Screen name="frontcover" component={frontCover} options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },

                  }} />


                  <Tab.Screen name="login" component={FormsPage} options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                    headerTransparent: true,

                  }} />


                  <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false,

                    tabBarIcon: () => (
                      <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                        <ImageBackground source={require('./src/Assets/home-free-icon-font.png')} style={{ width: 30, height: 30 }} resizeMode='contain' />
                      </View>),


                  }}
                  />

                  <Tab.Screen name="Profile" component={Profile} options={{

                    headerShown: false,

                    tabBarIcon: () => (
                      <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                        <ImageBackground source={require('./src/Assets/user-free-icon-font.png')} style={{ width: 30, height: 30 }} resizeMode='contain' />
                      </View>),


                  }} />

                </Tab.Navigator>

              </NavigationContainer>
            </Provider>
          </AuthProvider>
        </UserProvider>
      </PasswordProvider>
    </View>
  );
};

const Style = StyleSheet.create({

  Container: {
    flex: 1

  }
})

export default App;
