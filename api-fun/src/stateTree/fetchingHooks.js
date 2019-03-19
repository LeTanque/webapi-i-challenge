import { useState, useEffect } from 'react';
import axios from 'axios';


// export const useGetUsers = () => {
//     const [ getUsers, setGetUsers ] = useState([]);

//     useEffect(() => {
//         (() => {
//             axios
//                 .get('http://localhost:4000/api/users')
//                 .then(res => setGetUsers(res.data))
//                 .catch(err => console.log(err))
//         })()
//     }, [])
//     return getUsers;
// }


// export const useGetUserById = (id) => {
//     const [ getUserById, setUserById ] = useState({});

//     useEffect(() => {
//         (() => {
//             axios
//                 .get(`http://localhost:4000/api/users/${id}`)
//                 .then(res => setUserById(res.data))
//                 .catch(err => console.log(err))
//         })()
//     }, [])
//     return getUserById;

// }


export const useDeleteUser = (id) => {
    const [ deleteUser, setDeleteUser ] = useState();

    useEffect(() => {
        (() => {
            axios
                .delete(`http://localhost:4000/api/users/${id}`)
                .then(res => setDeleteUser(res.data))
                .catch(err => console.log(err))
        })()
    }, [])
    return deleteUser;
}