import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    } from 'react-native';

function App(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
        return(
                <View style={styles.container}>
                    <Text style={isDarkMode ? styles.TextWhite : styles.TextBlack}>Hello world</Text>
                </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextWhite: {
        color: '#FFFFFF',
    },
    TextBlack: {
        color: '#000000',
    },
});


export default App;
