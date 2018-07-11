import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from "native-base";

const TakePhoto = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}>
            <Icon style={{fontSize: 50}} name='ios-radio-button-on' />
        </TouchableOpacity>
    )
}

export { TakePhoto };
