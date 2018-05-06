import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { schedules } from './core'
import Pane from './scenes/pane'

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => <Pane top={2} schedules={schedules} {...props} />}
    />
  </Switch>
)

export default App
