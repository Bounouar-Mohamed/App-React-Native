import 'react-native';
import * as React from 'react'
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom/extend-expect'



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
import TranslationButton from '../Translation/TranslationButton';




describe('', () => {


  it('renders correctly', () => {
    render(<App />);
  })

});


describe('', () => {


  it('should display a registration form', () => {
    render(<Registration tpassword={''} setTpassword={''} />)

    const email: any = screen.getByPlaceholderText(/E-mail.../i)
    const password: any = screen.getByPlaceholderText(/Password.0/i)
    const Firstname: any = screen.getByPlaceholderText(/FirstName.0/i)
    const Lastname: any = screen.getByPlaceholderText(/LastName.0/i)



    fireEvent.changeText(email, 'momobounouar1@gmail.com')
    fireEvent.changeText(password, 'azeazeaze')
    fireEvent.changeText(Firstname, 'Bounouar')
    fireEvent.changeText(Lastname, 'Mohamed')

    fireEvent.press(screen.getByText('Button.0'))

  });

});


describe('', async () => {


  it('should display a login form', async () => {
    render(<PhoneLogin />)


    const email: any = screen.getByPlaceholderText(/E-mail.../i)
    const password: any = screen.getByPlaceholderText(/Password.0/i)



    fireEvent.changeText(email, 'momobounouar1@gmail.com')
    fireEvent.changeText(password, 'azeazeaze')

    fireEvent.press(screen.getByText('Button.0'))


    // screen.debug()


  });

});


describe('', () => {


  it('should display a button to change components', () => {
    render(<ButtonSwitch handleChange={undefined} />)

    fireEvent.press(screen.getByText('SignIn.0'))

  })

});


describe('', () => {


  it('must display a registration condition', () => {
    render(<Footer />)

    expect(
      screen.getByText('footer.0')
    )
  })

});


describe('', () => {


  it('should display a checklist', () => {
    render(<CheckList />);
  })

});


describe('login and registration component', () => {


  it('should redirect to the Login component', () => {

    render(<FormsPage />)

    expect(
      fireEvent.press(screen.getByText('SignIn.0'))
    )

  })

  it('should redirect to the Registration component', () => {

    render(<FormsPage />)

    expect(
      fireEvent.press(screen.getByText('SignUp.0'))
    )

  })

});


describe('', () => {


  it('should display apploye login and registration form', () => {
    render(<DashboardPhone />);
  })

});


describe('', () => {


  it('must contain the passwords entered by the user', () => {
    render(<PasswordProvider />);
  })

});


describe('', () => {


  it('must contain a connection or disconnection status ', () => {
    render(<AuthProvider />);
  })

});


describe('', () => {


  it('should display a translation button', () => {
    render(<TranslationButton />)

    // screen.debug()
    // expect(
    //   fireEvent.press(screen.getByText('EN'))
    // )
  })
});