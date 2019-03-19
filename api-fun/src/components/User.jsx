import React, { Fragment } from 'react';
import { FaUserMinus } from 'react-icons/fa';

import { useDeleteUser } from '../stateTree/fetchingHooks';

const User = props => {

    

    return (
        <Fragment >
            <div className='name'>{props.user.name}</div>
            <div className='bio'>{props.user.bio}</div>
            <span className='user-button'><FaUserMinus onClick={() => {useDeleteUser(props.user.id)}} /></span>
        </Fragment>
    );
}


export default User