import React from 'react'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import userReducer from './store/reducer/reducer'
import './App.css'

const App = () => {
  const store= createStore(userReducer)
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
