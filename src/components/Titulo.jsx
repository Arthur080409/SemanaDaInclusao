import React from 'react'
import { Text } from 'react-native'

export default function Titulo(props) {

    return (
        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'blue' }}>
            {props.texto}
        </Text>
    )

}