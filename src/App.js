import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RepoList from './components/RepoList'
import RepoDetails from './components/RepoDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RepoList} />
        <Route path="/repo/:owner/:repoName" component={RepoDetails} />
      </Switch>
    </Router>
  )
}

export default App
