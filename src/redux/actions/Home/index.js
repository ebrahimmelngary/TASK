import { START_LOADING, STOP_LOADING, FETCH_HOME_SUCCESS } from "../actionTypes"
import { get_request } from '../../../services/api'


export const Fetch_Home_Data = () => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING })
        const response = await get_request()
        dispatch({ type: STOP_LOADING })
        console.log('Home Actions', response)
        if (response) {
            dispatch({ type: FETCH_HOME_SUCCESS, payload: response })
        }else{
           console.log('errorInConnection')
        }
    }
}