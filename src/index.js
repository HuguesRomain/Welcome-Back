import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage';
import Introduction from './components/Introduction/Introduction';
import App from './App';
import Chapter1 from './components/Chapter1/chapter1';
import Chapter2 from './components/Chapter2/Chapter2';
import Chapter3 from './components/Chapter3/Chapter3';

const Root = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/introduction' component={Introduction}/>
    <Route path='/ChapterI' component={Chapter1}/>
    <Route path='/ChapterII' component={Chapter2}/>
    <Route path='/ChapterIII' component={Chapter3}/>
  </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('root'))

