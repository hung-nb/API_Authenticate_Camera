import React, { Component } from 'react'
import { View, StyleSheet, Text } from "react-native";
import { Button } from "native-base";

// My components
import { MyButton } from "../components/login"
import { Thumbnail } from "../components/common"

// My classes
import _db from "../business/SQLiteManager";

export default class Home extends Component {

    ////////////////////
    // Component state
    constructor(props) {        
        
        super(props)

        this.state = {
            savePicture: "",
        }
    }

    /////////////////
    // Life cycle
    componentWillMount = () => {

        // DB 
        console.log('Initialize database');
        new _db();
        _db.exportDbFile();

        // State
        this._willFocusSubscription = this.props.navigation.addListener(
            'didFocus', 
            () => {
                console.log('didFocus');
                this.setState( {savePicture:this.props.navigation.state.params.savePicture} );
            }
        );
    }

    componentWillUnmount() {
        // this._willBlurSubscription && this._willBlurSubscription.remove();
        this._willFocusSubscription && this._willFocusSubscription.remove();
    }

    ///////////////////////
    // Internal logic 
    _onPressCamera = () => {
        console.log('Opening camera...');
        let params = { previousRoute: this.props.navigation.state.routeName };
        this.props.navigation.navigate('Camera', params);
    }

    ////////////////////
    // Render UI
    render() {

        return (
            <View style={styles.container}>
                <Thumbnail uri={this.state.savePicture} />
                <Button
                    style={styles.btnTakePhoto}
                    onPress={() => this._onPressCamera()}>
                    <Text>Take photo</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
        btnTakePhoto: {
            marginTop: 5,
            justifyContent: 'center',
            alignSelf: 'center',
            width: 150,
        }
});