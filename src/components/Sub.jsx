import React from 'react'
import { Text } from 'react-native'

export default function Sub(props) {

    return (
        <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 40, color: 'red' }}>
            {props.texto}
        </Text>
    )

}