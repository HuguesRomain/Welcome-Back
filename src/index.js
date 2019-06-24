import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage';
import Introduction from './components/Introduction/Introduction';
import App from './App';

const Root = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/introduction' component={Introduction}/>
  </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('root'))

