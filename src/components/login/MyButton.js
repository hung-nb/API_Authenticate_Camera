import React from 'react'
import { Button, Text } from "native-base";

const MyButton = (props) => {
    return (
        <Button
            onPress={props.onPress}>
            <Text>{props.text}</Text>
        </Button>
    )
}

export { MyButton };