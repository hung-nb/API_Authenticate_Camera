import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "native-base";

// My components
import { MyButton } from "../components/login"

// My classes
import APIManager from "../business/APIManager";

export default class Login extends Component {

    /////////////////////
    // State control
    constructor(props) {
        super(props)
      
        this.state = {
            username: "",
            password: "",
            login: 0,   // 0: Not login, 1: Success, 2: Failed
        }
    }

    ////////////////////
    // Internal logics
    _onPressLogin = () => {
        console.log('Logging in');
        APIManager.AuthenticateUser(
            this.state.username,
            this.state.password
        ).then((response) => {
            response == true 
                ? this._navigateToHome()
                : this.setState({ login: 2 })
        });
    }

    _navigateToHome = () => {
        console.log('Log in success')
        this.props.navigation.navigate('Home', {});
    }

    ////////////////
    // Render UI
    render() {

        return (
            <View style={styles.container}>
                { this.state.login == 2
                    ? <Text style={styles.loginFailed}>Login failed</Text>
                    : null }
                <TextInput
                    style={styles.inputUsr}
                    placeholder = {'User name'}
                    onChangeText = { (text) => this.setState({username:text})} />
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputPass}
                    placeholder = {'Password'}
                    onChangeText = { (text) => this.setState({password:text})} />
                <Button
                    style={styles.btnLogin}
                    onPress={() => this._onPressLogin()}>
                    <Text>Login</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
        loginFailed: {
            alignSelf: 'center',
            color: 'red'
        },
        inputUsr: {
            paddingLeft: 5,
            marginTop: 5,
            width: 250,
            height: 42,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderColor: 'blue',
            borderRadius: 8,
        },
        inputPass: {
            paddingLeft: 5,
            marginTop: 5,
            width: 250,
            height: 42,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderColor: 'blue',
            borderRadius: 8,
        },
        btnLogin: {
            marginTop: 15,
            width: 150,
            justifyContent: 'center',
            alignSelf: 'center',
        },
});