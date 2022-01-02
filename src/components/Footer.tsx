import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

export const Footer = () => {
  return (
    <footer className="w-full bg-cp-teal flex justify-center py-12">
      <a href="https://github.com/ColtonZP" className="mr-16">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/colton-pemberton-1a7292163/">
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </footer>
  )
}
