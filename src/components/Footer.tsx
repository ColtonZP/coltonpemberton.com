import { logEvent } from 'firebase/analytics'
import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'
import { analytics } from '../index'

export const Footer = () => {
  return (
    <footer className="w-full bg-cp-teal flex justify-center py-12">
      <a
        href="https://github.com/ColtonZP"
        className="mr-16"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logEvent(analytics, 'view_github')}>
        <img src={github} alt="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/colton-pemberton-1a7292163/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logEvent(analytics, 'view_linkedin')}>
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </footer>
  )
}
