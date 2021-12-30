import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export const App = () => (
  <div className="bg-cp-dark-gray text-white">
    <Hero />
    <main className="max-w-7xl mx-auto px-4 sm:px-3 md:px-5">
      <Projects />
    </main>
    <Footer />
  </div>
)
