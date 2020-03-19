import React, { useState, useEffect, useCallback } from 'react'; // Hooks addition
// built in components 
import { FlatList, ScrollView, RefreshControl, View, Text, Image, StatusBar } from 'react-native';
// high order component connect redux with UI screen
import { connect } from 'react-redux';
// get actions function 
import { bindActionCreators } from 'redux';
// action functions use it as a (props)
import { Fetch_Home_Data } from '../../redux/actions/Home'
// global components
import { AppText, Button, AppIcon, Spinner } from '../../components';
// common colors
import { COLORS, ICONS, DEVICE_HEIGHT, IMAGES } from '../../common';
import styles from './styles';
import Swiper from 'react-native-swiper'
import moment from 'moment';

const IconText = ({ name, title }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' }}>
      <AppText>{title}</AppText>
      <AppIcon name={name} />
    </View>)
}

const PriceCard = ({ title, price }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40 }}>
      <AppText>{price}</AppText>
      <AppText>{title}</AppText>
    </View>
  )
}
const Home = ({ navigation, Fetch_Home_Data, data }) => {
  // Hooks state area
  const [refreshing, setRefreshing] = useState(false)
  // get data from redux action
  useEffect(() => {

    Fetch_Home_Data()

  }, [])


  // refershing time
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  // on refresh func 
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, [refreshing])

  if (!data) {

    setTimeout(() => {

      return <Spinner />
    }, 3000);
  } else {
    return (
      <>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView style={styles.container} onRefresh={onRefresh} refreshControl={<RefreshControl refreshing={refreshing} />} >
          <Swiper style={{ height: DEVICE_HEIGHT * 0.3 }} showsButtons={false}  >
            {data.img.map(i => <Image source={IMAGES.slider} resizeMode={'cover'} />)}
          </Swiper>
          <AppText style={{ padding: 10 }}>{`#${data.interest}`}</AppText>
          <AppText style={{ fontWeight: 'bold', fontSize: 16, padding: 10 }}>{data.address}</AppText>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <IconText title={moment(data.date).format('MMMM Do YYYY, h:mm:ss a')} name={ICONS.time} />
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>

            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', padding: 10 }}>
                <AppText style={{ fontWeight: 'bold' }}>{data.trainerName}</AppText>
                <Image source={IMAGES.profile} style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }} />
              </View>
              <AppText style={{ padding: 10 }}>{data.trainerInfo}</AppText>
            </View>

            <View style={{ padding: 10 }}>
              <AppText style={styles.commenView}>عن الدوره</AppText>
              <AppText>{data.occasionDetail}</AppText>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10 }}>

            <AppText style={styles.commenView}>تكلفة الدوره</AppText>
            {data.reservTypes.map(i => <PriceCard title={i.name} price={`${i.price} SAR`} />)}
          </View>
        </ScrollView>
        <Button title={'قم بالحجز الان'} onPress={() => alert('تم الحجز بنجاح')} />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    // add reducer state here
    data: state.Home.homeData
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    // add action fun here
    Fetch_Home_Data
  }, dispatch)
}

// Header name and styles
Home.navigationOptions = () => {
  return {
    // header name
    header: null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

