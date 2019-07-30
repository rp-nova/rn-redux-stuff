import React from 'react'

import {
    View,
} from 'react-native'

import Counter from '../components/Counter'

export default class Second extends React.Component {
    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: "gainsboro",
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <Counter />
            </View>
        )
    }
}