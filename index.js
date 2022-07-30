import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import * as React from 'react'
import './Translation/i18n'




const Root = () => (


        <App />

)

AppRegistry.registerComponent(appName, () => Root);
