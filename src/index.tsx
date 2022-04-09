import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './tailwind.css'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { firebaseConfig } from './firebase.config'

import { App } from './App'

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
