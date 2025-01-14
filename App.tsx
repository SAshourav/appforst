import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    ScrollView,
    } from 'react-native';
import FlashCard from './component/FlashCard';
import ElevatedCard from './component/ElevatedCard';

function App(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
        return(
                <ScrollView style={styles.container}>
                    <Text style={isDarkMode ? styles.TextWhite : styles.TextBlack}>Hello world</Text>
                    <FlashCard />
                    <ElevatedCard />
                </ScrollView>
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
