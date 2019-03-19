import React, { useState, useEffect, Fragment } from 'react';
// import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import axios from 'axios';

// import { getUsers } from '../stateTree/actions';
// import { useGetUsers } from '../stateTree/fetchingHooks';

import User from './User.jsx';



// class Users extends Component {
// const Users = props => {
export default function Users() {
    const [ users, setGetUsers ] = useState([]);
    
    useEffect(() => {
        (() => {
            axios
                .get('http://localhost:4000/api/users')
                .then(res => {setGetUsers(res.data)})
                .catch(err => console.log(err))
        })()
    }, [])



    // let state = {
    //     users:[]
    // }
    // const getUsers = useGetUsers()

    // componentDidMount() {
    //     this.props.getUsers();
    //     this.setState({users:this.props.users});
    // }

    // useEffect(() => {
    //     // useGetUsers(); // Error
    //     console.log(users)
    // })
        
    // if(this.props.fetchingUser) {
    //     return (
    //         <Fragment>
    //             <Loader type='Circles' color='#0000dd' height='40%' weight='40%' />
    //             <h3>loading users</h3>
    //         </Fragment>
    //     )
    // } else if (this.props.error) {
    //     return (
    //         <Fragment>
    //             <Loader type='Grid' color='#0055dd' height='40%' weight='40%' />
    //             <Loader type='Ball-Triangle' color='#ff0000' height='40%' weight='40%' />
    //             <code>{this.props.error}</code>
    //         </Fragment>
    //     )
    // }
    
    console.log(users)
    return (
        <Fragment>
            
            
            {users.map(user => (
                <User 
                    key={user.id}
                    user={user} 
                />
            ))}

        </Fragment>
    );
}


// const mapStateToProps = state => ({
//     users:state.users,
//     fetchingUser:state.fetchingUser,
//     error:state.error
// })

// export default connect(
//     mapStateToProps, 
//     { getUsers }
// )(Users);

// export default Users
