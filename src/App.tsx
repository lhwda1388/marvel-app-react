import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import CharactersPage from './pages/characters/CharactersPage'
import CharacterDetailPage from './pages/characters/CharacterDetailPage'
import ComicsPage from './pages/comics/ComicsPage'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import './App.scss'

export type AppProps = {}
function App(props: AppProps) {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={CharactersPage} />
        <Route path="/characters" exact={true} component={CharactersPage} />
        <Route path="/comics" component={ComicsPage} />
        <Route path="/characters/:id" component={CharacterDetailPage} />
      </Switch>
      <Footer />
    </HashRouter>
  )
}

export default App
