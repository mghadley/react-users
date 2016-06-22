import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute } from 'react-project'
import hello from './api/hello'
import App from './components/App'
import Home from './components/Home'
import ShowUser from './components/ShowUser'
import NoMatch from './components/NoMatch'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/users">
        <Route path=":id" component={ShowUser} />
      </Route>
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path=":hello" get={hello}/>
    </ServerRoute>
    <Redirect from="/not-dragon" to="/dragon"/>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
