import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from '../actions';


const initialState = {
    users:[],
    fetchingUser:false,
    error: null,
}


const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_USERS_START:
            return {
                ...state,
                fetchingUser: true,
                error: null,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users:action.payload,
                fetchingUser:false,
                error:null,
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                fetchingUser:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer
