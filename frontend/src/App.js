import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './page/Login'
import Logout from './page/Logout'

const Templates = () => (
  <div>
    <h2>Templates</h2>
  </div>
)

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
