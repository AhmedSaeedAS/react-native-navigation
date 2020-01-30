import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SettingScreen = (props) => {
    return (
        <View><Text>This is Setting Screen</Text>
            <Button title="Go to Notification" onPress={() => {
                props.navigation.navigate({ routeName: 'Notification' })
            }} />
        </View>
    )
};



export default SettingScreen;