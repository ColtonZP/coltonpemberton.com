import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="container links">
          <a href="https://github.com/ColtonZP" className="icon">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/colton-pemberton-1a7292163/" className="icon">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  )
}
