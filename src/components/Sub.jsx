import React from 'react'
import { Text } from 'react-native'

export default function Sub(props) {

    return (
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
            {props.texto}
        </Text>
    )

}