import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import sanityClient from '../client'

export const Projects = () => {
  const [archive, toggleArchive] = useState(false)
  const [mainProjects, setMainProject] = useState([])
  const [archived, setArchived] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "project"]{
            title,
            description,
            id,
            liveURL,
            sourceUrl,
            archived,
            "categories": categories[]->title,
            mainImage {
              asset->{
                _id,
                url
              }
            }
          }`,
      )
      .then(data => {
        setMainProject(
          data.filter(project => !project.archived).sort((a, b) => b.id - a.id),
        )
        setArchived(
          data.filter(project => project.archived).sort((a, b) => b.id - a.id),
        )
      })
      .catch(console.error)
  }, [])

  return (
    <div className="py-16">
      <div className="text-center">
        <h3
          className="text-4xl m-auto relative inline-block
          after:w-full after:h-[1px] after:block after:bg-gradient-to-r after:from-cp-teal after:absolute after:top-1/2 after:-right-[104%]
          before:w-full before:h-[1px] before:block before:bg-gradient-to-l before:from-cp-teal before:absolute before:top-1/2 before:-left-[104%]">
          Projects
        </h3>
      </div>

      {mainProjects && (
        <>
          <ul className="py-16">
            {mainProjects.slice(0, 3).map((site, i) => {
              const isEven = i % 2
              return (
                <li className="relative mb-52" key={site.title}>
                  <img
                    className={`rounded w-4/5 ${!isEven && 'ml-auto'}`}
                    src={site.mainImage.asset.url}
                    alt={site.title}
                  />
                  <div
                    className={`bg-gray-800 rounded-md w-4/6 absolute -bottom-16 px-4 pb-4 pt-10 ${
                      isEven && 'right-0'
                    }`}>
                    <h4
                      className={`text-2xl py-2 px-4 bg-gray-900 absolute -top-4 rounded z-20 w-fit ${
                        isEven ? '-right-4' : '-left-4'
                      }`}>
                      {site.title}
                    </h4>

                    <Info
                      description={site.description}
                      liveUrl={site.liveURL}
                      sourceUrl={site.sourceUrl}
                      tags={site.categories}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 mb-52 gap-4">
            {mainProjects.slice(3, mainProjects.length).map(site => (
              <li
                className="flex flex-col bg-gray-800 rounded p-4"
                key={site.title}>
                <img
                  className="rounded"
                  src={site.mainImage.asset.url}
                  alt={site.title}
                />
                <h4 className="text-2xl my-4">{site.title}</h4>

                <Info
                  description={site.description}
                  liveUrl={site.liveURL}
                  sourceUrl={site.sourceUrl}
                  tags={site.categories}
                />
              </li>
            ))}
          </ul>
        </>
      )}

      <button
        className="m-auto block text-cp-teal border rounded border-cp-teal py-1 px-4"
        onClick={() => toggleArchive(!archive)}
        type="button">
        {archive ? 'hide older projects -' : 'view older projects +'}
      </button>

      {archive && (
        <ul className="text-cp-teal">
          {archived.map(site => (
            <li key={site.title} className="flex mt-6">
              <h5 className="">{site.title}</h5>
              <div className="border-b-2 border-dotted border-cp-teal flex-1 relative bottom-1 mx-1" />
              <div className="links">
                {site.sourceUrl && (
                  <a
                    className="mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.sourceUrl}>
                    Source
                  </a>
                )}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={site.liveURL}>
                  Live
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Info = ({ description, liveUrl, sourceUrl, tags }) => (
  <>
    <p className="flex-1">{description}</p>

    <div className="my-4">
      <a
        className="bg-cp-teal py-1 px-2 rounded inline-block mr-4"
        target="_blank"
        rel="noopener noreferrer"
        href={liveUrl}>
        Live
      </a>
      <a
        className="bg-cp-teal py-1 px-2 rounded inline-block"
        target="_blank"
        rel="noopener noreferrer"
        href={sourceUrl}>
        Source
      </a>
    </div>
    <ul className="flex flex-wrap">
      {tags.map(tag => (
        <li className="pr-4 text-cp-teal" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  </>
)

Info.propTypes = {
  description: PropTypes.string,
  liveUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
}

Info.defaultProps = {
  description: '',
  liveUrl: '',
  sourceUrl: '',
}
