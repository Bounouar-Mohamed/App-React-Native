import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import * as React from 'react'




const Root = () => (


        <App />

)

AppRegistry.registerComponent(appName, () => Root);
