import React, { } from 'react';

// import { connect } from 'react-redux';
// import { getUsers } from './stateTree/actions';

import './App.css';

import Users from './components/Users.jsx';



const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        <Users />
        
      </header>
    </div>
  );
}




// const mapStateToProps = state => ({
//   users:state.users,
// })

// export default connect(
//   mapStateToProps, 
//   { getUsers }
// )(App);

export default App