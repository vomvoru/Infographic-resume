import * as React from 'react'
import AuthAdapter from '../adapter/Auth'

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <a href="#" onClick={signIn}>Sign in</a>
      </div>
    )
  }
}

async function signIn(){
  AuthAdapter.signIn()
}

export default Login
