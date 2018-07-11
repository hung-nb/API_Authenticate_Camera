import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from "native-base";

const Back = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}>
            <Icon name='ios-arrow-round-back' />
        </TouchableOpacity>
    )
}


export { Back };
