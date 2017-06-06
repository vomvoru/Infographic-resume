import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Templates = () => (
  <div>
    <h2>Templates</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
    <a href="#" onClick={onSignIn}>Sign in</a>
  </div>
)

function onSignIn() {
  let GoogleAuth = gapi.auth2.getAuthInstance()
  GoogleAuth.signIn()
}

setTimeout(()=>{
  gapi.load('auth2', function() {
    gapi.auth2.init()
    let GoogleAuth = gapi.auth2.getAuthInstance()
    GoogleAuth.currentUser.listen((googleUser) => {
      var profile = googleUser.getBasicProfile();
      if(profile){
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }else{
        console.log('logout')
      }
    })
  });
}, 1000)

const Logout = () => (
  <div>
    <h2>Logout</h2>
    <a href="#" onClick={onSignOut}>Sign out</a>
  </div>
)

/*global gapi*/

function onSignOut() {

  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

const Mypage = ({ match }) => (
  <div>
    <h2>Mypage</h2>
  </div>
)

const Editor = () => (
  <div>
    <h2>Editor</h2>
  </div>
)

const BaseContainer = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/editor">new template</Link></li>
        <li><Link to="/logout">logout</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/mypage">Mypage</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Templates}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/login" component={Login}/>
      <Route path="/mypage" component={Mypage}/>
      <Route path="/editor" component={Editor}/>
    </div>
  </Router>
)

export default BaseContainer
