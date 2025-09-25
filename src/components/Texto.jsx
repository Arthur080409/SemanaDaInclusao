import React from 'react'
import { Text } from 'react-native'

export default function Texto(props) {

    return (
        <Text style={[{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }, props.style]}>
            {props.texto}
        </Text>
    )

}