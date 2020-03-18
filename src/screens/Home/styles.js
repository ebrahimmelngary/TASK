import {StyleSheet} from 'react-native';
import { DEVICE_WIDTH } from '../../common';

const styles=StyleSheet.create({
container:{
    flex:1,
    // paddingHorizontal:10
},
headerCards:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:DEVICE_WIDTH * 0.85,
    alignItems:'center',
    alignSelf:'center',
    // marginTop:-5,

},
card:{
    width :DEVICE_WIDTH * 0.80 /3
}
})

export default styles;