export const Hero = () => {
  return (
    <header className="h-screen bg-hero-pattern bg-no-repeat bg-top bg-cover">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-3 md:px-5 flex flex-col items-start justify-center">
        <h1 className="text-7xl mb-3">
          Colton <b>Pemberton</b>
        </h1>
        <h2 className="text-5xl text-gray-500">Sr. Front End Developer</h2>

        <p className="text-gray-500 my-6 sm:max-w-md">
          I like to build projects using{' '}
          <span className="text-cp-blue">React.js</span>. I work hard to make
          the internet a better place than when I found it. I currently work at
          Accenture Federal Services as a Sr. Front End Engineer.
        </p>

        <a
          className="items-center rounded-md text-cp-blue border hover:after:w-full overflow-hidden  relative
          border-cp-blue p-3 block after:transition-[width] after:ease-in-out after:duration-400 after:block
          after:w-0 after:absolute after:top-0 after:left-0 after:h-full after:bg-cp-blue after:opacity-20"
          href="mailto: colton@coltonpemberton.com?subject=Contact from coltonpemberton.com">
          Get in touch
        </a>
      </div>
    </header>
  )
}
