import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export const App = () => (
  <div className="bg-cp-dark-gray text-white">
    <Hero />
    <main>
      <Work />
      <Projects />
    </main>
    <Footer />
  </div>
)
