import 'react-native';
import * as React from 'react'
import renderer from 'react-test-renderer';

import App from '../App';
import Registration from '../App/Apploye/moleculs/Registration';
import PhoneLogin from '../App/Apploye/moleculs/PhoneLogin';
import ButtonSwitch from '../App/Apploye/atoms/ButtonSwitch';
import Footer from '../App/Apploye/atoms/Footer';
import CheckList from '../App/Apploye/moleculs/CheckList';
import FormsPage from '../App/Apploye/organisms/FormsPage';
import DashboardPhone from '../App/Apploye/templates/DashboardPhone';
import PasswordProvider from '../App/Contextes/PasswordContexte';
import AuthProvider from '../App/Contextes/AuthContext';

// import TranslationButton from '../App/Translation/TranslationButton';




it('renders correctly', () => {
  renderer.create(<App />);
});

it('should display a registration form', () => {
  renderer.create(<Registration tpassword={''} setTpassword={''} />);
});

it('should display a login form', () => {
  renderer.create(<PhoneLogin />);
});

it('should display a button to change components', () => {
  renderer.create(<ButtonSwitch handleChange={undefined}  />);
});

it('must display a registration condition', () => {
  renderer.create(<Footer/>);
});

it('should display a checklist', () => {
  renderer.create(<CheckList/>);
});

it('FormsPage', () => {
  renderer.create(<FormsPage/>);
});

it('should display apploye login and registration form', () => {
  renderer.create(<DashboardPhone/>);
});

it('must contain the passwords entered by the user', () => {
  renderer.create(<PasswordProvider/>);
});

it('must contain a connection or disconnection status ', () => {
  renderer.create(<AuthProvider/>);
});

// it('should display a translation button', () => {
//   renderer.create(<TranslationButton/>);
// });