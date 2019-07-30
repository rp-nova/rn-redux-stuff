import React from 'react'

import {
    Text,
    TouchableOpacity,
} from 'react-native'

export default class Counter extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity = {0.6}
                style = {{
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 10,
                    elevation: 8,
                    height: 200,
                    justifyContent: "center",
                    width: 150,
                }}
            >
                <Text>
                    Counter
                </Text>

                <Text
                    style = {{
                        color: "black",
                        fontSize: 32,
                        fontWeight: "700",
                    }}
                >
                    0
                </Text>

                <Text>
                    Add To Increment
                </Text>
            </TouchableOpacity>
        )
    }
}