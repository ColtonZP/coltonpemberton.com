import { useState, useEffect } from 'react'
import sanityClient from '../client'

interface Project {
  title: string
  liveURL: string
  sourceUrl: string
}

interface MainProject extends Project {
  description: string
  mainImage: {
    asset: {
      _id: string
      url: string
    }
  }
  categories: string[]
}

export const Projects = () => {
  const [archive, toggleArchive] = useState(false)
  const [mainProjects, setMainProject] = useState<MainProject[]>(null)
  const [archived, setArchived] = useState<Project[]>(null)

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
        setMainProject(data.filter(project => !project.archived))
        setArchived(data.filter(project => project.archived))
      })
      .catch(console.error)
  }, [])

  return (
    <div className="my-work container">
      <h3>Projects</h3>

      <ul className="projects">
        {mainProjects &&
          mainProjects.map(site => (
            <li className="project" key={site.title}>
              <div className="image-overlay">
                <h4>{site.title}</h4>
                <img src={site.mainImage.asset.url} alt={site.title} />
                <ul className="tags">
                  {site.categories.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={site.liveURL}>
                  Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={site.sourceUrl}>
                  Source
                </a>
              </div>

              <p>{site.description}</p>
            </li>
          ))}
      </ul>

      <button
        className="show-more"
        onClick={() => toggleArchive(!archive)}
        type="button">
        {archive ? 'hide archive -' : 'view archive +'}
      </button>

      {archive && (
        <ul className="archive">
          {archived.map(site => (
            <li key={site.title}>
              <h5 className="title">{site.title}</h5>
              <div className="links">
                {site.sourceUrl && (
                  <a
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
