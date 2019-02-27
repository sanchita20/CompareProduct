import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'

import {Home, NotFound} from '../'
import CompareProduct from '../../components/Compare/CompareProduct';

class App extends Component {
  render(props) {
    console.log("am first to",props)
    return (
      <div className="app">
        <div className="container mt-4">
          <Switch>
            <Route path="/" component={Home}/>
            {/* <Route component={NotFound}/> */}
            <Route path="/comparePage" component={CompareProduct}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
