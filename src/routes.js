import React from 'react'
import IndexRoute from 'react-router/lib/IndexRoute'
import Route from 'react-router/lib/Route'
import Feeds from './components/feeds'

export default (
  <Route path='/' onUpdate={() => window.scrollTo(0, 0)}>
    <IndexRoute component={Feeds} />
  </Route>
)
