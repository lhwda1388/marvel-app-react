import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import CharactersPage from './pages/characters/CharactersPage'
import CharacterDetailPage from './pages/characters/CharacterDetailPage'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import './App.scss'
import ComicsPage from './pages/comics/ComicsPage'

export type AppProps = {}
function App(props: AppProps) {
  return (
    <HashRouter>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={CharactersPage} />
          <Route path="/characters" exact={true} component={CharactersPage} />
          <Route path="/characters/:id" component={CharacterDetailPage} />
          <Route path="/comics" component={ComicsPage} />
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  )
}

export default App
