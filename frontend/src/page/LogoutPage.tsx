import React from 'react'
import AuthAdapter from '../adapter/AuthAdapter'

class Logout extends React.Component {
  render() {
    return (
      <div>
        <h2>Logout</h2>
        <a href="#" onClick={signOut}>Sign out</a>
      </div>
    )
  }
}

async function signOut(){
  AuthAdapter.signOut()
}

export default Logout
