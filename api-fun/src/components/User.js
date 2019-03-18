import React, { Fragment } from 'react';


const User = (props) => {

    return (
        <Fragment >
            <div>{props.user.name}</div>
            <div>{props.user.bio}</div>
        </Fragment>
    );

}


export default User