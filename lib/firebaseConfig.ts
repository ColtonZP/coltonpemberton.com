import { Analytics, getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBfhfBhdeRvH7Zn27exXxuNek6MbRZIaFE',
  authDomain: 'colton-pemberton.firebaseapp.com',
  projectId: 'colton-pemberton',
  storageBucket: 'colton-pemberton.appspot.com',
  messagingSenderId: '835707280587',
  appId: '1:835707280587:web:e953e4b15b3d44ca55cf4e',
  measurementId: 'G-Z8MMGM13L4',
}

const app = initializeApp(firebaseConfig)
let analytics: Analytics

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

export { analytics }