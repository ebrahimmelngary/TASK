import React, { useState, useEffect, useCallback } from 'react'; // Hooks addition
// built in components 
import { FlatList, ScrollView, RefreshControl, View, Text, Image } from 'react-native';
// high order component connect redux with UI screen
import { connect } from 'react-redux';
// get actions function 
import { bindActionCreators } from 'redux';
// action functions use it as a (props)
import { Fetch_Home_Data } from '../../redux/actions/Home'
// global components
import { AppText, Button, AppIcon } from '../../components';
// common colors
import { COLORS, ICONS, DEVICE_HEIGHT } from '../../common';
import styles from './styles';
import Swiper from 'react-native-swiper'

const IconText = ({ name, title }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AppIcon name={name} />
      <AppText>{title}</AppText>
    </View>)
}

const PriceCard = ({ title, price }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
  console.log('sss', data)
  return (
    <>
      <ScrollView style={styles.container} >
        <Swiper style={{ height: DEVICE_HEIGHT * 0.3 }} showsButtons={false}  >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <AppText style={{ padding: 10 }}>#موسيقي</AppText>
        <AppText style={{ fontWeight: 'bold', fontSize: 16, padding: 10 }}>الاسم الكامل للدوره من اجل اظهار شكل التصميم</AppText>
        <View>

          <IconText />
          <IconText />
        </View>
        <View style={{ borderBottomWidth: 1, }}>


          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', padding: 10 }}>
              <AppText style={{ fontWeight: 'bold' }}>اسم المدرب</AppText>
              <Image style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'red', marginLeft: 10 }} />
            </View>
            <AppText style={{ padding: 10 }}>djawdjqjwqbfj</AppText>
          </View>

          <View style={{ padding: 10 }}>
            <AppText style={{ marginVertical: 10, fontWeight: 'bold' }}>عن الدوره</AppText>
            <AppText>الدوره مؤلفة من مجموعه اقسام</AppText>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>

          <AppText style={{ marginVertical: 10, fontWeight: 'bold' }}>تكلفة الدوره</AppText>
          <PriceCard title={'NAme'} price={'200'} />
          <PriceCard />
          <PriceCard />

        </View>
      </ScrollView >
      <Button title={'قم بالحجز الان'} style={{}} />
    </>
  );
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

