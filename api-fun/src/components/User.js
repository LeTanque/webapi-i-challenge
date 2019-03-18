import React, { Fragment } from 'react';
// import { connect } from 'react-redux';










const User = (props) => {



console.log(props);
    return (
        <Fragment>
            <div>{props.user.name}</div>
        </Fragment>
    );

}



// const mapStateToProps = state => ({
//   users:state.users,
// })

// export default connect(
//   mapStateToProps, 
//   {  }
// )(User);

export default User