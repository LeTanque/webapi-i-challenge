import axios from 'axios';


export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';


export const getUsers = () => dispatch => {
    dispatch({
        type: GET_USERS_START
    })
    axios
        .get('http://localhost:4000/api/users')
        .then(response => {
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: response.data,
            })
        })
        .catch(error => {
            dispatch({
                type: GET_USERS_FAIL,
                payload: error.message,
            })
        })
}

