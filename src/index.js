import React from 'react'
import { render } from 'react-dom'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import Layout from './components/Layout'
// import Home from './component/Home'
import SearchPage from './components/SearchPage'
// import AroundmePage from '.component/AroundmePage'


render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>
    {/* <IndexRoute component={Home}/>
    <Route path ='/around' component ={AroundmePage}/> */}
    <Route path ='/search' component={SearchPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);