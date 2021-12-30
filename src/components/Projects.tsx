import { useState, useEffect } from 'react'
import sanityClient from '../client'

interface Project {
  id: number
  title: string
  liveURL: string
  sourceUrl: string
  archived: boolean
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
  const [mainProjects, setMainProject] = useState<MainProject[]>([])
  const [archived, setArchived] = useState<Project[]>([])

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
      .then((data: MainProject[]) => {
        setMainProject(
          data.filter(project => !project.archived).sort((a, b) => a.id - b.id),
        )
        setArchived(
          data.filter(project => project.archived).sort((a, b) => a.id - b.id),
        )
      })
      .catch(console.error)
  }, [])

  return (
    <div className="">
      <h3 className="text-5xl py-16">Projects</h3>

      <ul className="grid grid-cols-1 md:grid-cols-6 grid-flow-col gap-8 grid-flow-row-dense">
        {mainProjects &&
          mainProjects.map((site, i) => (
            <li
              className={`col-span-${i < 2 ? '3' : '2'} inline-flex flex-col`}
              key={site.title}>
              <h4 className="text-3xl py-2 px-4 bg-gray-800 relative rounded-md right-3 top-2 z-20 w-fit">
                {site.title}
              </h4>
              <img
                className="rounded-lg"
                src={site.mainImage.asset.url}
                alt={site.title}
              />
              <div className="bg-gray-800 rounded-md w-11/12 m-auto bottom-4 relative p-4 flex-1">
                <ul>
                  {site.categories.map(tag => (
                    <li className="inline pr-4 text-cp-blue" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="my-3">
                  <a
                    className="bg-cp-blue py-1 px-2 rounded inline-block mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.liveURL}>
                    Live
                  </a>
                  <a
                    className="bg-cp-blue py-1 px-2 rounded inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.sourceUrl}>
                    Source
                  </a>
                </div>

                <p>{site.description}</p>
              </div>
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
