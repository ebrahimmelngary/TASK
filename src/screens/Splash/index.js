import React, { useEffect } from 'react'
import { ImageBackground, StatusBar, View } from 'react-native'
import { IMAGES } from '../../common';
import styles from './styles';
import { connect } from 'react-redux';
// get actions function 
import { bindActionCreators } from 'redux';
import { Fetch_Home_Data } from '../../redux/actions/Home'

const Splash = ({ navigation ,Fetch_Home_Data}) => {



    useEffect(() => {
        Fetch_Home_Data()
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 2000);
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      // add action fun here
      Fetch_Home_Data
    }, dispatch)
  }
  



export default connect(null, mapDispatchToProps)(Splash);


