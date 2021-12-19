import React from 'react'

import { Header } from './components/Header'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export const App = () => (
  <div className="App">
    <Header />
    <main>
      <Work />
      <Projects />
    </main>
    <Footer />
  </div>
)
