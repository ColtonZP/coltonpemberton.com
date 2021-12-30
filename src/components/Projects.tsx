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
    <div className="py-16">
      <h3 className="text-4xl">Projects</h3>

      <ul className="py-16">
        {mainProjects &&
          mainProjects.map((site, i) => {
            const isEven = i % 2
            return (
              <li className="relative mb-24" key={site.title}>
                <img
                  className={`rounded w-3/5 ${isEven && 'ml-auto'}`}
                  src={site.mainImage.asset.url}
                  alt={site.title}
                />
                <div
                  className={`bg-gray-800 rounded-md w-3/5 absolute bottom-10 px-4 pb-4 pt-10 text-sm ${
                    !isEven && 'right-0'
                  }`}>
                  <h4
                    className={`text-2xl py-2 px-4 bg-gray-900 absolute -top-4 rounded z-20 w-fit ${
                      isEven ? '-right-4' : '-left-4'
                    }`}>
                    {site.title}
                  </h4>

                  <p className="">{site.description}</p>

                  <div className="my-4">
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

                  <ul className="flex flex-wrap">
                    {site.categories.map(tag => (
                      <li className="pr-4 text-cp-blue" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
      </ul>

      <button
        className="m-auto block text-cp-blue border rounded border-cp-blue py-1 px-4"
        onClick={() => toggleArchive(!archive)}
        type="button">
        {archive ? 'hide older projects -' : 'view older projects +'}
      </button>

      {archive && (
        <ul className="text-cp-blue">
          {archived.map(site => (
            <li key={site.title} className="flex mt-6">
              <h5 className="">{site.title}</h5>
              <div className="border-b-2 border-dotted border-cp-blue flex-1 relative bottom-1 mx-1" />
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
