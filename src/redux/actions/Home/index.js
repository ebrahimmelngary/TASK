import { START_LOADING, STOP_LOADING, FETCH_HOME_SUCCESS } from "../actionTypes"


export const Fetch_Home_Data = () => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING })
        const response = await fetch("http://skillzycp.com/api/UserApi/getOneOccasion/389/0")
            .then(response => response.json())
            .then((response) => {
                return JSON.parse(response)

            }).catch((err) => {
                console.log('fetch', err)
            })

        dispatch({ type: STOP_LOADING })
        console.log('Home Actions', response)
        if (response) {
            dispatch({ type: FETCH_HOME_SUCCESS, payload: response })
        } else {
            console.log('errorInConnection')
        }
    }
}