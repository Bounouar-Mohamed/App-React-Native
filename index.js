import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import * as React from 'react'
import './App/Translation/i18n.tsx'



const Root = () => (


        <App />

)

AppRegistry.registerComponent(appName, () => Root);
