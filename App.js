import React from 'react'

import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import {
    createAppContainer,
    createMaterialTopTabNavigator,
    createStackNavigator,
} from 'react-navigation'

import First from './sources/screens/First'
import Second from './sources/screens/Second'

import Single from './sources/screens/Single'

const TopTabNavigator = createAppContainer(createMaterialTopTabNavigator(
    {
        First,
        Second,
    },
    {
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: "white",
            },
            style: {
                backgroundColor: "red",
            }
        }
    }
))

class TopTabContainer extends React.Component {
    static router = TopTabNavigator.router

    render() {
        return (
            <View
                style = {{
                    flex: 1,
                }}
            >
                <TopTabNavigator />

                <TouchableOpacity
                    activeOpacity = {0.6}
                    onPress = {() => this.props.navigation.push("Single")}
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
                        Navigate To Another View
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const AppContainer = createAppContainer(createStackNavigator(
    {
        TopTabContainer,
        Single,
    },
    {
        defaultNavigationOptions: {
            header: null,
        }
    }
))

export default class App extends React.Component {
    componentDidMount() {
        StatusBar.setBackgroundColor("firebrick", false)
    }

    render() {
        return (
            <AppContainer />
        )
    }
}