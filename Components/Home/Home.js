import React from 'react';
import Header from './Header';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    }
})

export default Home;