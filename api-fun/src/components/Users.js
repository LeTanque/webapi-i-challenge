import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getUsers } from '../stateTree/actions';

import User from './User';



class Users extends Component {
    state = {
        users:[]
    }
    
    componentDidMount() {
        this.props.getUsers();
    }


    render() {
        if(this.props.fetchingUser) {
            return (
                <Fragment>
                    <Loader type='Ball-Triangle' color='#0000dd' height='40%' weight='40%' />
                    <h3>loading users</h3>
                </Fragment>
            )
        } else if (this.props.error) {
            return (
                <Fragment>
                    <div className="App">
                        <Loader type='Ball-Triangle' color='#ff0000' height='40%' weight='40%' />
                        <code>{this.props.error}</code>
                    </div>
                </Fragment>
            )
        }

        
        return (
            <Fragment>
                {this.props.users.map(user => (
                    <User 
                        key={user.id}
                        user={user} 
                    />
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