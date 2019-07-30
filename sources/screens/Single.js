import React from 'react'

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import Counter from '../components/Counter'

export default class Single extends React.Component {
    render() {
        return(
            <View
                style = {{
                    flex: 1,
                }}
            >
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

                <TouchableOpacity
                    activeOpacity = {0.6}
                    onPress = {() => this.props.navigation.pop()}
                    style = {{
                        alignItems: "center",
                        backgroundColor: "dimgray",
                        padding: 20,
                    }}
                >
                    <Text
                        style = {{
                            color: "white",
                        }}
                    >
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}