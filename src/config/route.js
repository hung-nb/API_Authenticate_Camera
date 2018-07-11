import {createSwitchNavigator, createStackNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Camera from '../screens/Camera';

export const SignedIn = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            header: null
        }
    },
});

export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
          header: null
        }
    },
});

export const MainNavigator = (signedIn) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};