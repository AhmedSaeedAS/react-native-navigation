import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Home Screen</Text>
            <Button title="Go to Settings" onPress={() => {
                props.navigation.navigate({ routeName: 'Setting' })
            }} />
        </View>
    )
};

HomeScreen.navigationOptions = {
    headerTitle: "Dashboard",
    headerLeft: (<HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
        <Item title="Menu" iconName='ios-menu' onPress={() => { }} />
    </HeaderButtons>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9fb',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
