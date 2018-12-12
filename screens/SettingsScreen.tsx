import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import { ScreenStyles } from '../helpers/Styles'

export class SettingsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }: any) => (
            <Image
                source={require('../assets/settings.png')}
                style={[ScreenStyles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen 34 </Text>
            </View>
        );
    }
}