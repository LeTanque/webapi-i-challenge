import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../stateTree/actions';

import User from './User';





class Users extends Component {

  componentDidMount() {
    this.props.getUsers();
  }


  render() {
    if(this.props.fetchingUser === true) {
        return (
            <Fragment>
                <h3>loading users</h3>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {this.props.users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </Fragment>
    );
  }
}



const mapStateToProps = state => ({
  users:state.users,
  fetchingUser:state.fetchingUser,
  error:state.error
})

export default connect(
  mapStateToProps, 
  { getUsers }
)(Users);