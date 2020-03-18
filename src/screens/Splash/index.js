import React, { useEffect } from 'react'
import { ImageBackground, StatusBar, View } from 'react-native'
import { IMAGES } from '../../common';
import styles from './styles';

const Splash = ({ navigation }) => {



    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 1500);
    })

    return (
        <ImageBackground source={IMAGES.splash} style={styles.container} >
            <StatusBar backgroundColor={'#111'} />
        </ImageBackground>
    )
}

Splash.navigationOptions = () => {
    return {
        header: null
    };
};



export default Splash;




