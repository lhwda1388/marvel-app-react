import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Characters from './routes/Characters'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss'
import Comics from './routes/Comics'

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Characters} />
      <Route path="/comics" component={Comics} />
      <Footer />
    </HashRouter>
  )
}

export default App
